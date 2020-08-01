# kalndzirnavas.lv

## Set up

* Make sure you have [jekyll and ruby set up](https://jekyllrb.com/docs/)
* Clone the repo
* `bundle install`
* `bundle exec jekyll serve`
* Visit `localhost:4000`

## Adding content

[jekyll-multiple-languages-plugin](https://github.com/kurtsson/jekyll-multiple-languages-plugin) is used for localisation.

Default language is `lv`. You can change and add translations / content in `_i18n` folder either by modifying `language.yml` files or .md files in `_i18n/language/page/filename.md`.

## Publishing

The static site is built in `_site` folder. Since the website is hosted on Github pages but uses a plugin not supported by Github, to publish the site you also need to add the build folder to commits (Github won't build it for you).