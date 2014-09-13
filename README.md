# placebot

Slack bot for inserting placeholder images.

## How to Run

placebot is a simple HTTP server based on hapi. To start placebot, run the following command:

`node index template_url`

`template_url` is a URL that acts as a template for the placeholder service of your choice. The URL should contain the strings `{width}` and `{height}`. These represent the width and height of the desired placeholder image, and will be substituted dynamically when placebot is called.

An example usage of the placebot server that refers to the Placehold.it service is shown below:

`node index "http://placehold.it/{width}x{height}"`

## How to Use

1. Host the placebot code somewhere (for example, Heroku).
2. Set up an [Outgoing WebHook](https://my.slack.com/services/new/outgoing-webhook) in Slack. Note that your WebHook should allow the user to specify the width and height as a string `widthxheight`. placebot will parse these out using the regular expression `/(\d+)x(\d+)/`. If the image dimensions are not specified, they will default to 250.
