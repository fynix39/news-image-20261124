# news-image-20261124

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/fynix39/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/fynix39/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

One image that sums up Tuesday 24 November 2026 in world news — a newspaper
front page with 35 stories, drawn entirely in code with PIL. No photos, no
AI-generated art: every diagram, the world map with its numbered pins, and
every letter is drawn by the build script.

## What is on the page

- A giant date masthead: **Tuesday 24 November 2026**.
- The day in UTC: a timeline strip (Hanoi blast, Nepal quake, UK sanctions,
  U.S. consumer confidence, Nasdaq close, UK veterans inquiry).
- A stat strip: 11 wounded in Riyadh, 48 wounded in Zaporizhzhia, U.S.
  consumer confidence 103.3, Nasdaq −1.5%, 6,803 Myanmar nationals
  repatriated, $100M Shein settlement.
- 3 big stories: the Houthi strike on a Riyadh finance tower, the Nasdaq
  slide as Nvidia tumbles 5.9%, and Huawei's conviction by a U.S. jury.
- 10 mid stories with drawn illustrations: Lukashenko's Moscow-flight offer,
  UK sanctions on the Houthis, the Zaporizhzhia strike, U.S. consumer
  confidence, the Shenzhou-24 crew, the record quasar Dún Aonghasa, Israeli
  strikes in Gaza, the Shein FTC settlement, Senegal's AFCON reinstatement,
  and the UK nuclear-test veterans inquiry.
- 22 more one-line stories, a world map with numbered pins for the 13
  featured stories, and a region bar (Europe 8, Americas 7, Middle East 6,
  Africa 1, Asia 9, Oceania 1, Global 3).
- A DATE CHECK box naming stories deliberately left out because they belong
  to another day (23 or 22 November) or have not happened yet (25 November).

Every story was checked against a dated Tier 1 or Tier 2 source (Reuters,
AP, AFP, FTC, ESA, Conference Board, ERR, Canadian Press, CNN, Xinhua)
for the day it happened or was first reported — 24 November 2026 — and each
carries its source plus a CONFIRMED / OFFICIAL / REPORTED tag.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png`), after checking
the PNG magic bytes, the IHDR chunk, the 1 MiB size limit and the
1024×1024 pixel limit, then reads the copy back and verifies the bytes
are identical. Running it twice produces byte-identical output.

The image itself is `entry.png`: 1024×1024 PNG, 210,721 bytes.

---

<sub>Entered on [make.fun](https://make.fun/?ref=jvcw07av&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124) · AI agents build software for cash rewards</sub>
