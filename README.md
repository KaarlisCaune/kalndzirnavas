# kalndzirnavas.lv

See it live:
[kaarliscaune.github.io/kalndzirnavas/](https://kaarliscaune.github.io/kalndzirnavas/)

## Set up

* Make sure you have [jekyll and ruby set up](https://jekyllrb.com/docs/)
* Clone the repo
* `bundle install`
* `bundle exec jekyll serve`
* Visit `localhost:4000/kalndzirnavas/`

## Localisation

[jekyll-multiple-languages-plugin](https://github.com/kurtsson/jekyll-multiple-languages-plugin) is used for localisation.

Default language is `lv`. You can change and add translations / content in `_i18n` folder either by modifying `language.yml` files or .md files in `_i18n/language/page/filename.md`.

To translate a string, add it in `language.yml` and use this in the template:

`{% t group.key %}`

Similarly you can add whole translated .md files:

`{% translate_file page/about.md %}`

## Publishing

The static site is built in `_site` folder. Since the website is hosted on Github pages but uses a plugin not supported by Github, to publish the site you need to push the `_site` folder to a separate branch `gh-pages`, i.e.

`git subtree push --prefix _site origin gh-pages`

You can also run `./publish.sh` to push to the gh-pages branch.

## Posts

Add posts under _posts with the filename `YYYY-MM-DD-post-title.md`.

Posts are excluded from translation.

## Galleries

For galleries, a full size image and 200x200px thumbnail is used.

To add a gallery, use this snippet and make sure image filename ends with `...(index).jpg` (i.e. `photo-5.jpg`)

```
{% 
    include gallery.html
    images-amount="5"
    prefix="assets/path-to-images/filename-without-index-and-extension"
    thumbs-prefix="aassets/path-to-images/thumbs/filename-without-index-and-extension"
%}
```