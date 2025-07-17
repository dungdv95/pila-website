"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ApplicationSection() {
  return (
    <section className="relative overflow-hidden  py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
            🚀 New: AI-Powered Automation
          </Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Streamline Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Workflow
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
            Automate repetitive tasks, collaborate seamlessly, and boost
            productivity by 300%. Join thousands of teams already using
            StreamLine to work smarter, not harder.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent"
            >
              Watch Demo
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="container px-4 md:px-6 mt-16">
        <div className="mx-auto max-w-5xl">
          <Image
            src="/placeholder.svg?height=600&width=1000"
            alt="StreamLine Dashboard"
            width={1000}
            height={600}
            className="rounded-xl shadow-2xl border"
          />
        </div>
      </div>
    </section>
  );
}
