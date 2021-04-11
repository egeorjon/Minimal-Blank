# Minimal-Blank
A minimal Hugo theme

**Minimal-Blank** is a theme for the Hugo static site generator. This my first theme for this tool, built for my own blog.

You can find a live demo of the original Fresh theme [here](https://www.emmanuelgeorjon.com) (will be completed when the theme will be deployed in production).
This theme is intended for personal website and blog. If you'd like to extend the theme to include other functionalities, please submit a pull request.

## Table of Contents

- [Minimal-Blank](#minimal-blank)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tools and libraries](#tools-and-libraries)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Configuration](#configuration)
    - [Tests and production](#tests-and-production)
    - [Language](#language)
    - [Date format](#date-format)
    - [Site title / brand](#site-title--brand)
    - [Navigation](#navigation)
    - [Pagination](#pagination)
    - [The lists](#the-lists)
    - [The posts](#the-posts)
    - [Footer (top)](#footer-top)
    - [Footer (bottom)](#footer-bottom)
    - [SEO features](#seo-features)
    - [Favicons](#favicons)
    - [Google Analytics](#google-analytics)
    - [RSS feeds](#rss-feeds)
    - [Sitemap](#sitemap)
  - [Advanced configuration](#advanced-configuration)
    - [Manifest file](#manifest-file)
    - [Styles](#styles)
 

## Features

* Responsive design,
* No sidebar,
* Customizable,
* Customizable navigation menu,
* Contact form (by Netlify),
* Ready for Google search,
* Ready for Google Analytics.

## Tools and libraries

This theme uses
* [Bootstrap 5.0 Bêta 3](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
* [Fontawesome 5.15.2](https://fontawesome.com/)
* [Simple Lightbox 2.70](https://simplelightbox.com/)

## Installation

**Minimal-Blank** is a Hugo theme. So, before installing the theme, you need to 

* Install [Hugo](https://gohugo.io), 
* and create a new site ([procedure](https://gohugo.io/getting-started/quick-start/#step-2-create-a-new-site)).

Then **Minimal-Blank** can be deployed as many other themes, with 3 possible ways:

1. Git clone
2. Git submodule
3. Download ZIP and manual install

### Option 1: Git clone

From the root directory of your site, 
```bash
git clone https://github.com/egeorjon/minimal-blank themes/minimal-blank
```
This method could generate some issues with some hosting platforms (like Netlify).

### Option 2: Git submodule

From the root directory of your site,
```bash
git submodule add https://github.com/egeorjon/minimal-blank themes/minimal-blank
```
Edit the file `config.toml`, and update the first line
```toml
theme = "minimal-blank"
```
This is the method officially supported by Netlify.

### Option 3: Download ZIP and manual install

[Download the ZIP file](https://github.com/egeorjon/Minimal-Blank/archive/refs/heads/main.zip), and unpack it into the folder `themes/minimal-blank`.
Edit the file `config.toml`, and update the first line
```toml
theme = "minimal-blank"
```

## Usage

If you have some content, just start Hugo built-in server to see your site!

```bash
hugo server -D
```

if not, you can get the content from `examplesite`
```bash
cd my-site
cp themes/Minimal-Blank/examplesite content
hugo server
```

Then enter, use the following url [`localhost:1313`](http://localhost:1313) in your favorite browser.

## Configuration

### Tests and production

By default, the theme runs in test mode.
For moving to the production mode, you have to set the environment variable `HUGO_ENV`
```bash
export HUGO_ENV=production
```

if you are not using bash (and/or if you are in a Microsoft Windows environment
```cmd
SET HUGO_ENV=production
```

In the Production environment,

* Google Analytics is enabled,
* RSS links are enabled,
* ROBOTS directive are set to INDEX, FOLLOW.

### Language

Available translations are in the `/i18n` directory of the theme. Today only frenh, and english are available.
You can configure the language modifying the following key, in the site configuration file (usually `config.toml`).

```toml
DefaultContentLanguage = "fr"
languageCode           = "fr-fr"
```

### Date format

By default, the date format is `dd-mmm-yyyy` everywhere. You can configure this format, by using the following in the configuration file:
```toml
[params]
formatdate = "<date format>"
```

Example:
```toml
[params]
formatdate = "Jan 2, 2006"
```
will display June 5, 2020.

The full documentation for the date formats is [HERE](https://golang.org/pkg/time/#pkg-constants "Package time"), or [HERE](https://golang.org/src/time/format.go?h=date "Source file src/time/format.go")

### Site title / brand

The navigation bar includes the main menu, and the title of the site/blog (the brand). You can fully customize the brand. In the configuration file of the site:

```toml
[params]
brandlogo   = "<the path of the image related to the /static folder>"
brandtitle  = "<the title of the site>"
displaybrandtitle = true or false
```

Examples:

1. Example 1: Display both logo, and the title

```toml
[params]
brandlogo = "img/logo.png"   # The file must be put in the folder /static/img.
brandtitle = "John Doe"
displaybrandtitle = true
```

2. Example 2: Display only the logo (and put the title in the `alt` attribute of the logo)

```toml
[params]
brandlogo = "img/logo.png"
brandtitle = "John Doe"
displaybrandtitle = false
```

3. Example 3: Display only the title

```toml
[params]
brandlogo = ""
brandtitle = "John Doe"
displaybrandtitle = true
```
will give the following result


### Navigation

You have two ways for configuring the navigation menu (in the top bar).
You can start by
```toml
sectionPagesMenu = "main"
```
The menu will list the sections, and the pages in `/content`.

You can also customize the menu
```toml
[menu]

[[menu.main]]
identifier = "id of the item 1"
name = "Item 1"
url = "/<url of the item 1>"
weight = 10

[[menu.main]]
identifier = "id of the item 2"
name = "Item 2"
pre  = "html code to be addedd before the name"
url = "/<url of the item 2>"
weight = 20

...
```
The `weight` field define the order of the item in the list (smaller weights are displayed first).

Example:
```toml
[[menu.main]] 
  identifier = "photo"
  name       = "Photography"
  pre        = "<i class="fas fa-camera"></i>
  url        = "/photo/"
  weight     = 20
```

### Pagination

You can define the number of posts listed in each page of the lists. In the configuration file `config.toml`

```toml
paginate = <the number of posts>
```

### The lists

The lists are used to display a set of posts, in a section, for a serie, a tag, or an author.
For such pages, the parameters are the following

* `postcolumns`: an array for specifying the number of columns, according the width of the screen
  * sm for small, 
  * md for medium, 
  * lg for large, 
  * and xl for eXtra large
* `displayimage`: display the image associated to each post,
* `meta`: list of meta field to be displayed, with the display order. The available fields are
  * section,
  * date,
  * reading (the estimation duration of read),
  * tags,
  * authors,
  * category.

Example: 

```toml
[params.list]
  postcolumns   = { "sm" = 1, "md" = 1, "lg" = 2, "xl" = 2 }
  displayimage  = false
  meta = { 1 = "section", 2 = "date", 3 = "reading", 4 = "tags" }
#    meta = { 1 = "section", 2 = "date", 3 = "reading", 4 = "tags", 5 = "authors", 6 = "category" }
```

### The posts

The pages where the posts are displayed, are split into to parts

* The post itself,
* The "bottom"

For the post part, the parameters are more or less, the same than for the lists.

* `bottomcolumns`: number of columns according the screen's width,
* `metatop`: list of the meta fields to be displayed before the post,
* `metabottom`: list of the meta fields to be displayed after the post.

```toml
[params.Single]
  bottomcolumns = { "sm" = 1, "md" = 1, "lg" = 2, "xl" = 2, "xxl" = 3 }
  metatop       = { 1 = "date",    2 = "reading" }
  metabottom    = { 1 = "section", 2 = "tags"    }
```

You can also configure what is displayed at the bottom of the post. You can selected "widgets".

Example: 
```toml
[params.Single.Widgets]
  related     = { type = "series-or-related", weight = 3 }
  share       = { type = "share-links",       weight = 2 }
  author      = { type = "authors",           weight = 1 }
``` 

The `weight` allow to display the widgets is a specific order.
The possible widgets listed in the chapter [Footer](#Footer)

### Footer

The top part of the footer contains widgets. You can select the widgets you want to display. The syntax is the following:

```toml
[params.FooterWidgets]
  columns    = { <number of columns according the screen's width> }
  [params.FooterWidgets.Widgets]
    [params.FooterWidgets.Widgets.<widget id>]
      type   = "<type of the widget>"
      weight = <order>
```

Example:
```toml
[params.FooterWidgets]
  columns    = { "sm" = 1, "md" = 2, "lg" = 2, "xl" = 3 }
  [params.FooterWidgets.Widgets]
    [params.FooterWidgets.Widgets.series]
      type   = "series"
      weight = 1
    [params.FooterWidgets.Widgets.about-links]
      type   = "text"
      weight = 2
      params = "links"
    [params.FooterWidgets.Widgets.followme]
      type   = "follow"
      weight = 3
```

The possible widgets are 

| Widget            | Description  |
|-------------------|----------------------------------------------|
| authors           | Display the list of the authors of the posts |
| categories        | Give the lst of sections |
| follow            | Display a list of "follow" links |
| related-posts     | Give a list of posts related to the current post |
| same-series       | Display the list of posts belonging to the same serie than the current post |
| series-or-related | a combination of the two previous widgets |
| series            | List of the series |
| share-links       | set of links to share the current post |
| tags-cloud        | Display the cloud of the tags |
| tags              | List of tags |
| text              | Display the content of a file / post |


Of course, if you want, you can develop you own widget, and put it in the folder `themes\minimal-blank\layout\partial\widgets`.

### Footer (bottom)

The bottom part of the footer shows the copyright information of the site.
The parameters are grouped into the `[Params.copyright]` section.

```toml
[params.copyright]
  FirstDate     = "<first date of the publication"
  Attribution   = "<Name of the blog's owner >"
  SentenceSmall = "<reduced copyright sentence>"
  SentenceFull  = "<the full copyright sentence, with all details>"
```

Example:

```toml
[params.copyright]
  FirstDate     = "2008"
  Attribution   = "Emmanuel Georjon"
  SentenceSmall = "[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode), thème [Minimal-Blank](https://github.com/egeorjon/Minimal-Blank)"
  SentenceFull  = "Contenu sous license Creative Commons [BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode), thème [Minimal-Blank](https://github.com/egeorjon/Minimal-Blank)"
```

The social links can be configured also
```toml
[params.followlinks]
twitter = "<link to your Twitter account"
github = "<link to your GitHub account>"
facebook = "<link to your facebook account>"
pinterest = "<link to your PInterest account>"
linkedin = "<link to your LinkedIn account>"
rss = "<link to your RSS file>"
```
Example:
```toml
[params.followlinks]
twitter = "https://twitter.com/johndoe"
github = "https://github.com/johndoe"
facebook = ""
pinterest = ""
linkedin = "https://linkedin.com/in/johndoe"
rss = ""
```

### SEO features

You can configure the S.E.O features with the following parameters:

```toml
[params]
  description   = "short description of the blog" # Short description for the meta description
  keywords      = [ "keyword 1", "keyword 2", ... ..., "keyword n" ] # List of tags for the meta keywords
  opengraph     = true # Enable OpenGraph if true
  schema        = true # Enable Schema JSON file
  twitter_cards = true # Enable Twitter Cards if true
  themecolor    = "#ffffff"
```

### Favicons

If you want to setup [favicons](https://en.wikipedia.org/wiki/Favicon "Favicons definition in Wikipedia"), you just need to put the file in the folder `/static/assets/favicons`.

The name of the icons 

* for IOS (apple), must start by `apple`,
* for androit must start by `android`, 
* for the legacy browsers with `favicon.ico`, 
* for the microsoft operating systems, must start with `ms-`, 

You can configure also an SVG icon (any name with the `svg` extension).

For example:
```
android-icon-512x512.png
android-icon-96x96.png
android-icon_192x192.png
apple-touch-icon-120x120.png
apple-touch-icon-152x152.png
apple-touch-icon-167x167.png
apple-touch-icon-180x180.png
favicon.ico
ms-icon-144x144.png
site-logo.svg
```

### Google Analytics

You can optionally enable Google Analytics. Type your tracking code in the `config.toml` file.

```toml
googleAnalytics = "UA-XXXXX-X"
```

### RSS feeds

The RSS file is generated by the default Hugo template. The feeds can be configured using the following parameters:
```toml
copyright = "(c) 2008-2021 Your own copyright string"  # Use in the RSS Internal template

[services.rss]
  limit = 10 # max number of posts to be displayed

[author] # Used in RSS internal template
  name  = "Emmanuel GEORJON"
  email = "blog@emmanuelgeorjon.com"
```

You have also to specify for which page you want to generate a RSS file
In the following example, the RSS file will generated for the home page, and for each section.

```toml
[outputs]
  home    = ["HTML", "RSS", "JSON", "MANIFEST"]
  section = ["HTML", "RSS"]
```

### Sitemap

The theme generates the `sitemap.xml`.
It uses the standard Hugo's template. The configuration can be done with the parameters described in the [Hugo's documentation](https://gohugo.io/variables/sitemap/#readout)

Example: 

```toml
[sitemap]
  changefreq = "weekly"
  filename = "sitemap.xml"
  priority = 0.5
```


## Advanced configuration

### Manifest file

The theme is able to generate the **manifest** file of the site.
In order to allow this, you have to add the following parameters

```toml
[outputFormats]
  [outputFormats.MANIFEST]
    mediaType       = "application/json"
    baseName        = "manifest"
    isPlainText     = true
    notAlternative  = true

[outputs]
  home    = ["HTML", "RSS", "JSON", "MANIFEST"]
```

### Styles

So far, the theme doen't provide an easy way to customize styles.
However, you can customize the theme with two ways

* All default `Bootstrap` values used by the theme are in the file `themes/Minimal-Blank/assets/customization.scss`.
* The theme styles are in the file `themes/Minimal-Blank/assets/styles.scss`

The theme uses the icons from [FontAwesome](https://fontawesome.com/). You can add icons if required, by editing the file `themes/Minimal-Blank/assets/fontawesome-free-5.15.2-web/scss/_icons.scss`, and uncomment the line corresponding to the icon you want to display.
