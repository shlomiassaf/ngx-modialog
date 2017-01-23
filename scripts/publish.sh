#!/usr/bin/env bash

####################################################################################################
#                   Taken from https://github.com/angular/material2
####################################################################################################

# `npm whoami` errors and dies if you're not logged in,
# so we redirect the stderr output to /dev/null since we don't care.
NPM_USER=$(npm whoami 2> /dev/null)

if [ "${NPM_USER}" != "shlomiassaf" ]; then
  echo "You must be logged in as 'shlomiassaf' to publish. Use 'npm login'."
  exit
fi

set -ex


npm publish --access public ./dist_package


# Always log out of npm when publish is complete.
#npm logout
