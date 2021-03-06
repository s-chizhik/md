#!/usr/bin/env python

from lang import ru, ua, en

import re
import random
import string

TEMPLATE = '_index.html'
LANGUAGES = [ru, ua, en]

TEMPLATE_VARS = re.compile('\{#([\w_.-]+)#\}')


def process_template(lang, template):
    variables = TEMPLATE_VARS.findall(template)
    lang_variables = lang.texts

    lang_variables['version'] = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(10))

    for variable in variables:

        if variable in lang_variables:
            value = str(lang_variables[variable]).strip()
        else:
            value = ''

        template = template.replace('{#' + variable + '#}', value)

    return template


def main():
    template = open(TEMPLATE, 'r').read()

    for lang in LANGUAGES:
        out = open('%s.html' % lang.name, 'w+')
        out.write(process_template(lang, template))
        out.close()


if __name__ == '__main__':
    main()
