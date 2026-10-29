# Traffic sign artwork: sources and review

## Manual references

- [Maryland Driver's Manual, DL-002, October 2026](https://mva.maryland.gov/media/148): the official PDF text was read through the page retrieval tool. Its table of contents identifies traffic sign shapes on printed page 20, regulatory signs on 21, warning signs on 22, other sign types on 23, and signals on 17–19. Its text was accessed using the page retrieval tool; the English PDF illustrations were not accessible directly. The manual is copyrighted; no manual illustrations are redistributed here.
- User-provided Spanish Maryland Driver's Manual, October 2026: pages 24–27 were rendered locally and visually compared with sourced SVG assets. The Spanish and English editions have different printed pagination. The existing question bank was authored against the 2025 edition and has not yet been audited against 2026. The copyrighted manual is not included in this repository.

## Sign artwork

- [whizy76/mutcd-svg, pinned commit e471f83eb6ec5cc00a78ff96d94f2194926ed71c](https://github.com/whizy76/mutcd-svg/tree/e471f83eb6ec5cc00a78ff96d94f2194926ed71c): the repository's 1,054-entry manifest and SVGs were inspected. The repository states that the signs originate from FHWA 2024 Standard Highway Signs, are public-domain federal designs, and the repository's own metadata and tooling are dedicated under CC0-1.0. Its license expressly excludes the AASHTO-owned Interstate Shield. See the unmodified [source license](../LICENSE-MUTCD-ASSETS.txt). This is the source repository's stated provenance and rights, not a guarantee for every possible sign or other collection.
- [FHWA Standard Highway Signs release page](https://mutcd.fhwa.dot.gov/kno-shs_2024-release-status/): FHWA describes its phased SVG releases and notes that older designs should be used alongside the phased releases while the full publication is in progress. The FHWA page was read, but the large vector ZIPs and the older 2004/2012 collections were not downloaded; direct command-line access to those hosts was blocked.

Each local SVG is an unchanged file from the pinned repository revision; the catalog records its URL and SHA-256. We do not create variants by mirroring, recoloring, editing text, or substituting a similar design. Fifty-two records are **VERIFIED** against the 2026 Spanish manual illustrations; the remainder are **UNRESOLVED**. An exact asset is not implied for unresolved entries. See the [sign-by-sign coverage report](MARYLAND_SIGN_COVERAGE.md) for details and rejected lookalikes. The [contact sheet](sign-contact-sheet.html) is a visual index of candidate assets, not proof of 2026 verification.

## To finish the audit

Continue inspecting the Spanish 2026 PDF, including traffic signals and illustrated signs elsewhere in the manual. Compare each candidate's geometry, colors, orientation, wording and numbers, and license against the specific 2026 illustration. For unmatched or protected artwork find a rights-cleared authoritative original; do not use screenshots from the manual. Update the catalog status only after that review, regenerate reports with `node scripts/build-sign-reports.mjs`, and run the tests and browser checks. The number and completeness of the inventory must also be rechecked against the actual illustrated 2026 pages.
