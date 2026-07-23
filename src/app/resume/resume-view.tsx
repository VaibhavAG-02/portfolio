"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Download, ArrowLeft } from "lucide-react";
import ResumeDoodle from "./resume-doodle";

// Drop the compiled PDF here: public/Vaibhav_Resume.pdf
const RESUME_PATH = "/Vaibhav_Resume.pdf";

export default function ResumeView() {
  // The PDF is a static file the owner drops in; if it's absent the <iframe>
  // renders a blank white page with no explanation. Probe it first so we can
  // say what's wrong instead of showing a dead frame.
  const [missing, setMissing] = useState(false);
  useEffect(() => {
    let alive = true;
    fetch(RESUME_PATH, { method: "HEAD" })
      .then((r) => alive && setMissing(!r.ok))
      .catch(() => alive && setMissing(true));
    return () => {
      alive = false;
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* Hide the global nav on mobile, only while this page is mounted */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@media (max-width: 767px){ header { display: none !important; } }",
        }}
      />

      {/* Top bar: back (left) + download (right) */}
      <div className="mx-auto w-full max-w-4xl shrink-0 px-4 pt-16 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex items-center justify-between gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
          {/* Deliberately NOT using <Button asChild>: this template's Button
              clones every child with `pointer-events-none`, which kills the
              link. Styled with the same buttonVariants classes instead. */}
          <Link
            href={RESUME_PATH}
            download
            className="cursor-can-hover group inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            Download PDF
          </Link>
        </motion.div>
      </div>

      {/* PDF viewer — centered on mobile (short A4 card), top-aligned on desktop (tall) */}
      <div className="mx-auto flex w-full max-w-4xl flex-1 items-center justify-center px-2 pb-6 md:items-start md:px-4 md:pb-24">
        {/* opacity-only animation: a transformed ancestor would trap the fixed doodle FAB */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="aspect-[210/297] w-full overflow-hidden rounded-2xl bg-white shadow-xl"
        >
          {missing ? (
            <div className="flex h-full flex-col items-center justify-center gap-2 p-8 text-center">
              <p className="text-lg font-semibold text-neutral-900">
                Résumé not uploaded yet
              </p>
              <p className="max-w-sm text-sm text-neutral-600">
                Add the PDF at{" "}
                <code className="rounded bg-neutral-100 px-1 py-0.5">
                  public{RESUME_PATH}
                </code>{" "}
                and redeploy. The filename must match exactly.
              </p>
            </div>
          ) : (
            <ResumeDoodle
              src={`${RESUME_PATH}#toolbar=0&navpanes=0&view=FitH`}
              title="Vaibhav Sathe — Résumé"
            />
          )}
        </motion.div>
      </div>
    </div>
  );
}
