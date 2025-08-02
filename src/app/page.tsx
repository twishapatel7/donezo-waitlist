"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, MessageSquare, FileText, Upload, Brain, Send, FormInput, Headphones } from "lucide-react"

export default function DonezoLandingPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle waitlist signup
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-red-400">donezo</div>
            <Button
              
              className="border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900 bg-transparent"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-red-400/10 text-red-400 border-red-400/20">
            Skip the hold music. Get things donezo.
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            The AI that handles your <span className="text-red-400">customer service</span> — end-to-end
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            donezo is an AI agent that understands your issues from receipts and descriptions, talks to companies for
            you via chats and calls, and tracks everything as it solves your everyday customer service problems.
          </p>

          {/* Waitlist Form */}
          <div className="max-w-md mx-auto">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                />
                <Button type="submit" className="bg-red-400 hover:bg-red-500 text-slate-900 font-semibold">
                  Join Waitlist
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 text-red-400">
                <CheckCircle className="w-5 h-5" />
                <span>You're on the list! We'll be in touch soon.</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Problem Stats */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Here's how customer service makes people feel →</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">60%</div>
              <p className="text-slate-300">hang up after 1 minute on hold</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">66%</div>
              <p className="text-slate-300">get frustrated before speaking to an agent</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">75%</div>
              <p className="text-slate-300">say it takes too long to reach a live agent</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">96%</div>
              <p className="text-slate-300">become disloyal if forced to expend high effort</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Issues */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">The current issues.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-red-400">Wasted hours</h3>
                <p className="text-slate-300">
                  Navigating confusing processes to resolve basic issues like billing errors, refunds, cancellations, or
                  tech glitches
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <FileText className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-red-400">Unstructured complaints</h3>
                <p className="text-slate-300">
                  Screenshots, long complaint emails, voice notes: all hard to convert into action
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <MessageSquare className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-red-400">Ghosting</h3>
                <p className="text-slate-300">
                  Customers ghost chatbots or refuse to answer calls due to repetitive frustration
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-red-400">Deadlines missed</h3>
                <p className="text-slate-300">
                  Important refunds or warranty windows are missed because users don't notice buried emails or track
                  deadlines
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">The need is massive.</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-8">
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">300M</div>
              <p className="text-slate-300">consumers in the U.S. interact with customer support annually</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">$2T+</div>
              <p className="text-slate-300">
                in annual consumer spending flows through e-commerce, telecom, banking, and insurance
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">13hrs</div>
              <p className="text-slate-300">
                average time each U.S. consumer spends dealing with customer service per year
              </p>
            </div>
          </div>
          <div className="text-2xl font-bold text-red-400">$78 billion/year market opportunity</div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">
            We're the "one-click" layer between you and any company's customer support
          </h2>
          <p className="text-center text-slate-300 mb-12 text-lg">
            The AI that handles your customer service — end-to-end.
          </p>

          <div className="grid md:grid-cols-5 gap-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-6 h-6 text-red-400" />
                </div>
                <div className="text-red-400 font-semibold mb-2">1</div>
                <h3 className="font-semibold mb-3 text-white">Problem reporting</h3>
                <p className="text-sm text-slate-300 mb-3">Don't explain the same issue three times.</p>
                <ul className="text-xs text-slate-400 space-y-1">
                  <li>• Upload screenshots, bills, chat logs</li>
                  <li>• Speak or type naturally</li>
                  <li>• AI extracts core issues</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-red-400" />
                </div>
                <div className="text-red-400 font-semibold mb-2">2</div>
                <h3 className="font-semibold mb-3 text-white">Smart detection</h3>
                <p className="text-sm text-slate-300 mb-3">We read the fine print so you don't have to.</p>
                <ul className="text-xs text-slate-400 space-y-1">
                  <li>• Extracts key details automatically</li>
                  <li>• Classifies your issue type</li>
                  <li>• Flags urgency levels</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-6 h-6 text-red-400" />
                </div>
                <div className="text-red-400 font-semibold mb-2">3</div>
                <h3 className="font-semibold mb-3 text-white">Communication</h3>
                <p className="text-sm text-slate-300 mb-3">Skip the angry typing.</p>
                <ul className="text-xs text-slate-400 space-y-1">
                  <li>• Generates polite messages</li>
                  <li>• Tone adjustment options</li>
                  <li>• Tracks message status</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FormInput className="w-6 h-6 text-red-400" />
                </div>
                <div className="text-red-400 font-semibold mb-2">4</div>
                <h3 className="font-semibold mb-3 text-white">Support forms</h3>
                <p className="text-sm text-slate-300 mb-3">No more clicking through 8 tabs.</p>
                <ul className="text-xs text-slate-400 space-y-1">
                  <li>• Finds right support portals</li>
                  <li>• Auto-fills known info</li>
                  <li>• Guides through flows</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-6 h-6 text-red-400" />
                </div>
                <div className="text-red-400 font-semibold mb-2">5</div>
                <h3 className="font-semibold mb-3 text-white">Chats and calls</h3>
                <p className="text-sm text-slate-300 mb-3">We stay on hold for you.</p>
                <ul className="text-xs text-slate-400 space-y-1">
                  <li>• Joins via browser extension</li>
                  <li>• Talks like a human</li>
                  <li>• You can drop in anytime</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-red-400/5">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-4xl font-bold mb-6">Ready to skip the hold music?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of others who are tired of wasting time on customer service. Be the first to try donezo when
            we launch.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />
              <Button type="submit" className="bg-red-400 hover:bg-red-500 text-slate-900 font-semibold">
                Join Waitlist
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 text-red-400 text-lg">
              <CheckCircle className="w-6 h-6" />
              <span>You're on the list! We'll be in touch soon.</span>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold text-red-400 mb-4">donezo</div>
          <p className="text-slate-400">Skip the hold music. Get things donezo.</p>
        </div>
      </footer>
    </div>
  )
}
