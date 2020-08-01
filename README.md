# kalndzirnavas.lv

## Set up

* Make sure you have [jekyll and ruby set up](https://jekyllrb.com/docs/)
* Clone the repo
* `bundle install`
* `bundle exec jekyll serve`
* Visit `localhost:4000/kalndzirnavas/`

## Adding content

[jekyll-multiple-languages-plugin](https://github.com/kurtsson/jekyll-multiple-languages-plugin) is used for localisation.

Default language is `lv`. You can change and add translations / content in `_i18n` folder either by modifying `language.yml` files or .md files in `_i18n/language/page/filename.md`.

## Publishing

The static site is built in `_site` folder. Since the website is hosted on Github pages but uses a plugin not supported by Github, to publish the site you need to push the `_site` folder to a separate branch `gh-pages`, i.e.

`git subtree push --prefix dist origin gh-pages`

For the site to be visible on Github pages, `baseurl` is set to `kalndzirnavas` right now. That won't be necessary when an actual domain is used.