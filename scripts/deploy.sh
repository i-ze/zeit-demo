#!/bin/bash
now i-ze/zeit-demo --public -e foobar="foo" --token $NOW_GITHUB_DEPLOY_TOKEN --debug
now ln --token $NOW_GITHUB_DEPLOY_TOKEN --debug
now rm -y zeit-demo --token $NOW_GITHUB_DEPLOY_TOKEN --debug --safe
