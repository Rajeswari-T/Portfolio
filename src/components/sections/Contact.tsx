import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { containerVariants, itemVariants } from "@/lib/animationVariants";
import { contactMethods, availability } from "@/data/contact";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-16 overflow-hidden bg-gradient-to-br from-indigo-50/40 via-purple-50/40 to-pink-50/40"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-300/20 to-purple-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-300/15 to-cyan-300/15 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to drive frontend innovation and technical excellence in a
            senior engineering role. Let's discuss how I can contribute to your
            high-impact team.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 backdrop-blur-xl border border-white/40 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:bg-white/90">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <motion.div variants={itemVariants} className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-purple-50/50 dark:hover:bg-purple-900/20 transition-colors group"
                    >
                      <div
                        className={`p-2 rounded-lg transition-all duration-300 ${
                          method.primary
                            ? "gradient-primary group-hover:shadow-lg group-hover:shadow-purple-500/25"
                            : "bg-gray-100 dark:bg-gray-800 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30"
                        }`}
                      >
                        <method.icon
                          className={`h-5 w-5 ${
                            method.primary
                              ? "text-white"
                              : "text-muted-foreground group-hover:text-primary"
                          } transition-colors`}
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">
                          {method.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {method.value}
                        </p>
                      </div>
                      <Button
                        variant={method.primary ? "default" : "outline"}
                        size="sm"
                        onClick={() => window.open(method.action, "_blank")}
                        className={
                          method.primary
                            ? "gradient-primary text-white border-0 hover:shadow-lg hover:shadow-purple-500/25"
                            : "border-primary/30 hover:bg-purple-50 dark:hover:bg-purple-900/30"
                        }
                      >
                        Connect
                      </Button>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={itemVariants} className="pt-6 border-t">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-medium text-foreground">
                      Location
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    Birmingham, AL • Open to relocation
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Availability & CTA */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <Card className="bg-white/80 backdrop-blur-xl border border-white/40 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 hover:bg-white/90">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Current Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {availability.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-muted-foreground"
                      >
                        <div className="w-3 h-3 gradient-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center space-y-6 p-6 bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl hover:bg-white/90 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <h3 className="text-xl font-semibold text-foreground">
                Ready to Build the Future?
              </h3>
              <p className="text-muted-foreground">
                Let's discuss how my experience in enterprise-grade development,
                performance optimization, and technical leadership can drive
                your team's success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="flex-1 gradient-primary text-white border-0 hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
                  onClick={() =>
                    window.open("mailto:dtalluri@yahoo.com", "_blank")
                  }
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Start a Conversation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 border-2 border-primary/30 bg-white/70 hover:bg-white/90 hover:border-primary/60 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                  onClick={() =>
                    window.open("https://calendly.com/durga-talluri", "_blank")
                  }
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Call
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
