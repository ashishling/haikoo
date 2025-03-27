"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { siteConfig } from "@/config/site"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  petName: z.string().optional(),
  petType: z.enum(["cat", "dog", "other"]),
  frameSize: z.enum(["small", "medium", "large", "other"]),
  priceRange: z.string().min(1, "Please enter a price range"),
  suggestions: z.string().optional()
})

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      petName: "",
      petType: "dog",
      frameSize: "medium",
      priceRange: "",
      suggestions: ""
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const formData = new FormData();
      // Add form-name field which is required by Netlify
      formData.append("form-name", "waitlist");
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value.toString());
      });
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData as any).toString()
      });
      
      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.status}`);
      }
      
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hidden form for Netlify to detect at build time */}
      <form name="waitlist" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="petName" />
        <input type="radio" name="petType" />
        <input type="radio" name="frameSize" />
        <input type="text" name="priceRange" />
        <input type="text" name="suggestions" />
      </form>

      <section id="join" className="relative overflow-hidden bg-secondary/30 py-20 md:py-32">
        <div className="container relative z-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {siteConfig.waitlistForm.title}
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground">
              {siteConfig.waitlistForm.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <div className="rounded-2xl border bg-background p-8">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">
                    {siteConfig.waitlistForm.successMessage}
                  </h3>
                </motion.div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                    data-netlify="true"
                    name="waitlist"
                    method="POST"
                  >
                    <input type="hidden" name="form-name" value="waitlist" />
                    <input type="hidden" name="bot-field" />
                    
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{siteConfig.waitlistForm.fields.name.label}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={siteConfig.waitlistForm.fields.name.placeholder}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{siteConfig.waitlistForm.fields.email.label}</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder={siteConfig.waitlistForm.fields.email.placeholder}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="petName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{siteConfig.waitlistForm.fields.petName.label}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={siteConfig.waitlistForm.fields.petName.placeholder}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="petType"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>{siteConfig.waitlistForm.fields.petType.label}</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              {siteConfig.waitlistForm.fields.petType.options.map((option) => (
                                <FormItem key={option.value} className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value={option.value} />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {option.label}
                                  </FormLabel>
                                </FormItem>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="frameSize"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>{siteConfig.waitlistForm.fields.frameSize.label}</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              {siteConfig.waitlistForm.fields.frameSize.options.map((option) => (
                                <FormItem key={option.value} className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value={option.value} />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {option.label}
                                  </FormLabel>
                                </FormItem>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="priceRange"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{siteConfig.waitlistForm.fields.priceRange.label}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={siteConfig.waitlistForm.fields.priceRange.placeholder}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="suggestions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{siteConfig.waitlistForm.fields.suggestions.label}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={siteConfig.waitlistForm.fields.suggestions.placeholder}
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Joining..." : "Join Waitlist"}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
