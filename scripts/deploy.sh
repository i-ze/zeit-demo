#!/bin/bash
now rm -y zeit-demo --token $NOW_GITHUB_DEPLOY_TOKEN --debug --safe
now i-ze/zeit-demo --public -e foobar="foo" --token $NOW_GITHUB_DEPLOY_TOKEN --debug