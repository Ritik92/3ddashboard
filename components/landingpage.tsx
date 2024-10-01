"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { ChevronDown, Sun, Moon, Sparkles } from 'lucide-react';

const LandingPage = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-900 dark:to-indigo-900 text-white p-4 shadow-lg"
      >
        <div className="container mx-auto flex justify-between items-center">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500"
          >
            CG Viz Studio
          </motion.h1>
          <nav className="flex items-center space-x-4">
            <Switch
              checked={isDarkMode}
              onCheckedChange={toggleDarkMode}
              className="mr-2"
            />
            {isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            <Button
              variant="ghost"
              className="text-white hover:bg-white/20"
              onClick={() => setIsLoginOpen(true)}
            >
              Login
            </Button>
            <Button
              variant="outline"
              className="bg-white text-purple-600 hover:bg-purple-100 hover:text-purple-700"
              onClick={() => setIsLoginOpen(true)}
            >
              Sign Up
            </Button>
          </nav>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto py-8 px-4">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Professional 3D Visualization Services
          </h2>
          <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">
            Bringing your ideas to life with stunning, photorealistic results
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition hover:scale-105"
          >
            Get a Free Quote
          </Button>
        </motion.section>

        {/* 3D Viewer Placeholder */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 h-96 mb-12 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
            }}
            className="text-center"
          >
            <Sparkles className="h-16 w-16 mb-4 text-purple-500 mx-auto" />
            <p className="text-3xl font-bold text-purple-700 dark:text-purple-300">3D Viewer Coming Soon</p>
          </motion.div>
        </motion.div>

        {/* Services Section */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Our Services
          </h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {['Architectural Visualization', 'Product Visualization', '3D Animation'].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-white dark:bg-gray-800 shadow-xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6">
                    <CardTitle className="text-2xl font-extrabold">{service}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600 dark:text-gray-300">
                      Stunning {service.toLowerCase()} to bring your projects to life with unparalleled realism and creativity.
                    </p>
                  </CardContent>
                  <CardFooter className="bg-gray-50 dark:bg-gray-700 p-4">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Learn More</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-8">
        <div className="container mx-auto text-center">
          <p className="mb-4">&copy; 2024 CG Viz Studio. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <Button variant="link" className="text-purple-300 hover:text-purple-100">Privacy Policy</Button>
            <Button variant="link" className="text-purple-300 hover:text-purple-100">Terms of Service</Button>
          </div>
        </div>
      </footer>

      {/* Login/Signup Modal */}
      <AnimatePresence>
        {isLoginOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setIsLoginOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                  <Card>
                    <CardHeader>
                      <CardTitle>Login</CardTitle>
                      <CardDescription>Enter your credentials to access your account.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Login</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="signup">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sign Up</CardTitle>
                      <CardDescription>Create a new account to get started.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Sign Up</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
              <Button
                variant="ghost"
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={() => setIsLoginOpen(false)}
              >
                <ChevronDown className="h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;