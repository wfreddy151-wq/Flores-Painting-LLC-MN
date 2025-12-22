import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    }, 1000);
  }

  const contactMethods = [
    {
      icon: Phone,
      label: t.contact.methods.call,
      value: "713 374 5666",
      action: "tel:7133745666",
      color: "bg-blue-100 text-blue-600 hover:bg-blue-200",
    },
    {
      icon: MessageSquare,
      label: t.contact.methods.sms,
      value: "713 374 5666",
      action: "sms:7133745666",
      color: "bg-green-100 text-green-600 hover:bg-green-200",
    },
    {
      icon: MessageSquare,
      label: t.contact.methods.whatsapp,
      value: "WhatsApp",
      action: "https://wa.me/17133745666",
      color: "bg-emerald-100 text-emerald-600 hover:bg-emerald-200",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
              {t.contact.title}
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              {t.contact.subtitle}
            </p>

            <div className="grid gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  target={method.action.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-6 p-6 rounded-2xl transition-all hover:scale-[1.02] hover:shadow-lg bg-white shadow-sm border border-gray-100 group`}
                >
                  <div className={`p-4 rounded-full ${method.color} transition-transform group-hover:rotate-12`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{method.label}</h3>
                    <p className="text-gray-500 font-medium">{method.value}</p>
                  </div>
                </a>
              ))}

              <div className="flex items-center gap-6 p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
                <div className="p-4 rounded-full bg-orange-100 text-orange-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <p className="text-gray-500 font-medium">Josesflores33@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-none shadow-2xl shadow-primary/5 overflow-hidden">
              <div className="h-2 bg-secondary w-full" />
              <CardContent className="p-8 md:p-10 bg-white">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">{t.contact.form.name}</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-gray-50 border-gray-200 focus:bg-white h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">{t.contact.form.email}</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" {...field} className="bg-gray-50 border-gray-200 focus:bg-white h-12" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">{t.contact.form.phone}</FormLabel>
                            <FormControl>
                              <Input placeholder="(555) 123-4567" {...field} className="bg-gray-50 border-gray-200 focus:bg-white h-12" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">{t.contact.form.message}</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project..." 
                              className="min-h-[150px] bg-gray-50 border-gray-200 focus:bg-white resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 h-14 text-lg font-bold shadow-lg shadow-primary/20"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="animate-pulse">Sending...</span>
                      ) : (
                        <span className="flex items-center gap-2">
                          {t.contact.form.submit} <Send className="w-5 h-5" />
                        </span>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
