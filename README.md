# Minimal-Blank
A minimal Hugo theme

> The theme is still being developped, and is still not ready for a public site.

**Minimal-Blank** is a theme for the Hugo static site generator. This my first theme for this tool, built for minimal-blanking my own blog.

You can find a live demo of the original Fresh theme here (will be completed when the theme will be deployed in production).

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
    - [Footer (top)](#footer-top)
    - [Footer (bottom)](#footer-bottom)
    - [Google Analytics](#google-analytics)
    - [Styles](#styles)

## Features

* Responsive design
* No sidebar
* Customizable footer,
* Customizable navigation menu
* Contact form by Formspree
* Ready for Google search
* Ready for Google Analytics 

## Tools and libraries

This theme uses
* [Bootstrap 5.0 Bêta 3](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
* [Fontawesome 5.15.2](https://fontawesome.com/)
* [Simple Lightbox 2.70](https://simplelightbox.com/)

## Installation

1. Install [Hugo](https://gohugo.io)

2. Create a new site by running:
```bash
hugo new site my-site
cd my-site
```
Then, 
```bash
git submodule add https://github.com/egeorjon/Minimal-Blank.git themes/minimal-blank
```

3. Then edit your `config.toml` file with

```toml
# ...
theme = "minimal-blank"
# ...
```

4. It's done. 

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
defaultContentLanguage = "en"
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
[params.navbar]
brandlogo = "<the path of the image related to the /static folder>"
brandlogo-small = "<the path of the image related to the /static folder>"
brandtitle = "<the title of the site, empty if you want only the logo>"
DisplayBrandTitle = true
```

Examples:

1. Example 1: Display both logo, and the title

```toml
[params.navbar]
brandlogo = "img/logo.png"
brandlogo-small = "img/logo-sm.png"
brandtitle = "John Doe"
DisplayBrandTitle = true
```
will give the following result

2. Example 2: Display only the logo (and put the title in the `alt` attribute of the logo)

```toml
[params.navbar]
brandlogo = "img/logo.png"
brandlogo-small = "img/logo-sm.png"
brandtitle = "John Doe"
DisplayBrandTitle = false
```
will give the following result

3. Example 3: display only the title

```toml
[params.navbar]
brandlogo = ""
brandlogo-small = ""
brandtitle = "John Doe"
DisplayBrandTitle = true
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
url = "/<url of the item 2>"
weight = 20

# ...
```
The `weight` field define the order of the item in the list (smaller weights are displayed first).

### Pagination

You can define the number of posts listed in each page of the lists. In the configuration file `config.toml`

```toml
paginate = <the number of posts>
```

### Footer (top)

The top part of the footer contains widgets. You can select the widgets you want to display. In the configuration file `config.toml`, 

```toml
[params.footer.widgets]
tagcloud     = true
categorylist = true
series       = true
about        = true
about-page   = "/about.md"
```

Of course, if you want, you can develop you own widget, and put it in the folder `themes\minimal-blank\layout\partial\widgets`.

### Footer (bottom)

The bottom part of the footer is composed of a `copyright` area, and `social links` area.
The `copyright`part can be configured with the following parameters

```toml
[params.copyright]
firstdate = "<first year of publication>"
CopyrightString = "<the copy right string>"
attribution = "<the owner of the site>"
```
Example:
```toml
[params.copyright]
firstdate = "2008"
CopyrightString = "Copyright &copy;"
attribution = "John Doe"
```
will display the following
`2008-2020 Copyright &copy; - John Doe`

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
will display the following

### Google Analytics

You can optionally enable Google Analytics. Type your tracking code in the `config.toml` file.

```toml
googleAnalytics = "UA-XXXXX-X"
```

### Styles

So far, the thme doen't provide an easy way to customize styles. However, the theme uses `Bootstrap`. All values used by the theme are in the file `/assets/scss/var_custo.scss`.

* You can update the values in this file,
* and the stylesheet will be automatically updated during the next build.
 