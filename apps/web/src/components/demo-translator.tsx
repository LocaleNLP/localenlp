"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowRight, Loader2 } from "lucide-react"

const languages = [
  { code: "swa", name: "Swahili" },
  { code: "hau", name: "Hausa" },
  { code: "yor", name: "Yoruba" },
  { code: "zul", name: "Zulu" },
  { code: "amh", name: "Amharic" },
]

export function DemoTranslator() {
  const [inputText, setInputText] = React.useState("")
  const [outputText, setOutputText] = React.useState("")
  const [sourceLang, setSourceLang] = React.useState("eng")
  const [targetLang, setTargetLang] = React.useState("swa")
  const [isTranslating, setIsTranslating] = React.useState(false)

  async function handleTranslate() {
    setIsTranslating(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setOutputText("Translation will be implemented with actual API integration")
    setIsTranslating(false)
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="p-4">
        <div className="space-y-4">
          <Select value={sourceLang} onValueChange={setSourceLang}>
            <SelectTrigger>
              <SelectValue placeholder="Select source language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="eng">English</SelectItem>
              {languages.map((lang) => (
                <SelectItem key={lang.code} value={lang.code}>
                  {lang.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Textarea
            placeholder="Enter text to translate..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="min-h-[200px]"
          />
        </div>
      </Card>

      <Card className="p-4">
        <div className="space-y-4">
          <Select value={targetLang} onValueChange={setTargetLang}>
            <SelectTrigger>
              <SelectValue placeholder="Select target language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.code} value={lang.code}>
                  {lang.name}
                </SelectItem>
              ))}
              <SelectItem value="eng">English</SelectItem>
            </SelectContent>
          </Select>
          <Textarea
            placeholder="Translation will appear here..."
            value={outputText}
            readOnly
            className="min-h-[200px]"
          />
        </div>
      </Card>

      <div className="lg:col-span-2 flex justify-center">
        <Button
          size="lg"
          onClick={handleTranslate}
          disabled={!inputText || isTranslating}
        >
          {isTranslating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Translating...
            </>
          ) : (
            <>
              Translate
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
