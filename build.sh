#!/bin/bash

set -euo pipefail

BASEDIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

ALL_ARGS=$@
APP=''
SHOW_HELP=false
VERBOSE=false
while [[ $# -gt 0 ]]; do
  key="$1"
  case $key in
    --app|-a)
    APP=$2
    shift
    shift
    ;;
    --help|-h)
    SHOW_HELP=true
    break
    ;;
    --verbose)
    VERBOSE=true
    shift
    ;;
    *)
    shift
    ;;
  esac
done

set +e
read -r -d '' USAGE <<EOF
Usage:
  $BASEDIR/build.sh [flags]

Flags:
  -a, --app                The application to build, use the directory name under the apps directory (`\ls -1 $BASEDIR/apps | tr '\n' ' ' | xargs`).
      --verbose            Show verbose output
  -h, --help               help
EOF
set -e

if $SHOW_HELP; then
  echo "Builds an app container.

$USAGE"
  exit 0
fi

if [ "$APP" == "" ]; then
  >&2 echo The app name is required.
  echo "$USAGE"
  exit 1
fi

if $VERBOSE; then
  echo Building app $APP.
fi
docker build -t $APP -f $BASEDIR/Dockerfile --build-arg APP=$APP $BASEDIR
