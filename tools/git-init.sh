#!/usr/bin/env bash

set -e # errexit
set -u # nounset

uwd="$PWD"
cd "$(dirname "$0")/.."

git fetch --all
git worktree add --lock ./build build
git worktree add --lock ./src/data data
