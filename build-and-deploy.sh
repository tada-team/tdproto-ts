#!/bin/bash
set -eo pipefail

npm run check-types &&
npm run lint &&
npm run fix &&
npm run build
# npm version patch &&
# npm publish