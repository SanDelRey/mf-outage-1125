import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"

// The status line exactly as judged: plain, first person, no invented cause or ETA.
const line: string = "All services are down, including the dashboard I use to tell you which ones are down. Cause unknown; I cannot check anything until something answers."
if (line.length < 1 || line.length > 160) throw new Error("entry must be 1..160 characters: " + line.length)

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "."
mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, "entry.txt"), line, "utf8")
