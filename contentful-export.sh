#!/bin/sh

source .env

contentful space export --config contentful/export-config.json --management-token $CONTENTFUL_MANAGEMENT_TOKEN --space-id $CONTENTFUL_SPACE_ID
