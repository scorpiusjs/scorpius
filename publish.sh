#!/bin/bash
for f in ./packages/*;
	do
		[ -d $f ] && cd "$f" && echo publishing $f && meteor publish --no-lint
	done;