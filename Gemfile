source "https://rubygems.org"
gem "jekyll", "~> 4.3.2"
group :jekyll_plugins do
  gem 'jekyll-multiple-languages-plugin'
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end


gem "webrick", "~> 1.7"
