# Thread Count 

[Thread Count](https://thread-count.vercel.app/) is a service that allows you to generate custom status badges displaying Meta's Threads.net follower counts. You can customize the badge color, style, width, scale, label color, and more. The generated badges are in SVG format and can be easily embedded into your markdown files, websites, or any other platform that supports SVG images.

<a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck" alt="Default Badge"></a>

## Motivation

The Thread Count API was created to provide an easy way for users to showcase their Threads.net follower counts using customizable status badges. Whether you want to display your follower count on your personal blog, project documentation, or social media profiles, this API enables you to generate visually appealing badges that suit your preferences.

## Technologies and Dependencies

The Thread Count API is built using the following technologies:

- **Node.js**: A JavaScript runtime environment.
- **Express.js**: A fast and minimalist web framework for Node.js.
- **Threads Unofficial API**: A reverse-engineered Node.js/TypeScript client for Threads.
- **Badgen**: A library for generating SVG badges.
- **Gradient Badge**: A library for applying gradients to badges.
- **Swagger UI Express**: A middleware for rendering Swagger UI documentation.

## How to Use

1. Clone this repository to your local machine.
2. Navigate to the `thread-count` directory.
3. Install the dependencies by running `npm install`.
4. Start the server by running `npm start`.
5. The bot will be accessible at `http://localhost:{PORT}` (default port is 3000).
6. Access the `/thread-count/:username` endpoint to trigger the bot and generate a badge for the specified username.

### Base URL

The base URL for the Thread Count API is [`https://thread-count.vercel.app`](https://thread-count.vercel.app).

### Get a Badge

To get a badge displaying an Instagram follower count, make a GET request to the following endpoint:
```js
/thread-count/:username
```
Replace `:username` with the desired Instagram username.

#### Parameters

The `/thread-count/:username` endpoint supports the following query parameters:

- `color` (optional): The color of the badge. Default: `blue`.
- `style` (optional): The style of the badge. Default: `flat`.
- `width` (optional): The width of the badge icon. Default: `13`.
- `scale` (optional): The scale of the badge. Default: `1`.
- `labelColor` (optional): The color of the badge label. Default: `black`.
- `icon` (optional): Whether to include the badge icon. Default: `true`.
- `label` (optional): The label text for the badge. Default: `Thread Count`.
- `gradient` (optional): Whether to apply a gradient to the badge. Default: `true`.

## Example Badges

To use a badge in a markdown file, simply copy the markdown code and paste it into your file.
```markdown
<a href="https://www.threads.net/{your-username}">
    <img src="https://thread-count.vercel.app/thread-count/{your-username}" alt="My Thread Count">
</a> 
```

### Color

You can use any valid HEX color or pick from a predefined set of named colors (`blue` is the default if gradients is disabled).

| color | demo |
| ----- | ---- |
| `blue (default)` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck?gradient=false&color=blue" alt="blue Badge"></a> |
| `green` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck?gradient=false&color=green" alt="Green Badge"></a> |
| `yellow` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck?gradient=false&color=yellow" alt="Yellow Badge"></a> |
| `orange` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck?gradient=false&color=orange" alt="Orange Badge"></a> |
| `red` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck?gradient=false&color=red" alt="Red Badge"></a> |
| `pink` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck?gradient=false&color=pink" alt="Pink Badge"></a> |
| `purple` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck?gradient=false&color=purple" alt="Purple Badge"></a> |
| `4B0082 (Hex code for Indigo)` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck?gradient=false&color=4B0082" alt="Indigo Badge"></a> |

### Style

You can use any valid style or pick from a predefined set of styles (`flat` is the default).

| style | demo |
| ----- | ---- |
| `flat (default)` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck?style=flat" alt="Flat Badge"></a> |
| `classic` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck?style=classic" alt="Classic Badge"></a> |

### Width

You can use any valid width or pick from a predefined set of widths (`13` is the default).

| width | demo |
| ----- | ---- |
| `13 (default)` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck?width=13" alt="13px Badge"></a> |
| `20` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck?width=20" alt="20px Badge"></a> |
| `30` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck?width=30" alt="30px Badge"></a> |

### Scale

You can use any valid scale or pick from a predefined set of scales (`1` is the default) (does not apply well in GitHub READMEs).

| scale | demo |
| ----- | ---- |
| `1 (default)` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck?scale=1" alt="1x Badge"></a> |
| `1.5` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck?scale=1" alt="1.5x Badge"></a> |
| `2` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck?scale=1" alt="2x Badge"></a> |

### Label Color

You can use any valid HEX color or pick from a predefined set of named colors (`black` is the default).

| labelColor | demo |
| ---------- | ---- |
| `black (default)` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck?labelColor=black" alt="Black Badge"></a> |
| `white` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck?labelColor=white" alt="White Badge"></a> |
| `gray` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck?labelColor=gray" alt="Gray Badge"></a> |
| `red` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck?labelColor=red" alt="Red Badge"></a> |
| `green` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck?labelColor=green" alt="Green Badge"></a> |

### Icon

You can enable or disable the badge icon (`true` is the default).

| icon | demo |
| ---- | ---- |
| `true (default)` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck" alt="Default Badge"></a> |
| `false` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck?icon=false" alt="No Icon Badge"></a> |

### Label

You can use any valid label or pick from a predefined set of labels (`Thread Count` is the default).

| label | demo |
| ----- | ---- |
| `Thread Count (default)` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck" alt="Default Badge"></a> |
| `Follower Count` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck?label=Follower%20Count" alt="Follower Count Badge"></a> |
| `Followers` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck?label=Followers" alt="Followers Badge"></a> |

### Gradient

You can enable or disable the badge gradient (`true` is the default).

| gradient | demo |
| -------- | ---- |
| `true (default)` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck" alt="Default Badge"></a> |
| `false` | <a href="https://www.threads.net/@zuck"><img src="https://thread-count.vercel.app/thread-count/zuck?gradient=false" alt="No Gradient Badge"></a> |

## Credits

- **Threads Unofficial API**: [https://github.com/junhoyeo/threads-api](https://github.com/junhoyeo/threads-api)
- **Badgen**: [https://github.com/badgen/badgen](https://github.com/badgen/badgen)
- **Gradient Badge**: [https://github.com/bokub/gradient-badge](https://github.com/bokub/gradient-badge)
- **Swagger UI Express**: [https://github.com/scottie1984/swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)