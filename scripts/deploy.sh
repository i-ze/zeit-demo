#!/bin/bash
now i-ze/zeit-demo --public -e foobar="it's working" --token $NOW_GITHUB_DEPLOY_TOKEN --debug
now ln --token $NOW_GITHUB_DEPLOY_TOKEN --debug
now rm -y zeit-demo --token $NOW_GITHUB_DEPLOY_TOKEN --debug --safe
