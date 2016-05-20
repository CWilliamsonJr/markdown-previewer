require('../css/style.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

class Markdown extends React.Component {
    constructor() {
        super();
        this.state = ({value: `#  Put your markdown here
# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com
Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"
`});
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    getMarkdown() {
        return {
            __html: marked(this.state.value, {sanitize: true})
        }
    }
    render() {
        let markdown_txt = this.getMarkdown();

        return (
            <div>
                <PageHeader/>
                <div className="container-fluid">

                    <div className="row">
                        <div className='col-sm-6 box-wrapper'>
                            <p className="text-center box_lbl">Your Markdown goes in the text box:</p>
                            <textarea id="box_txt" onChange={(event) => this.handleChange(event)} defaultValue={this.state.value}/>
                        </div>
                        <div className='col-sm-6'>
                            <p className="text-center box_lbl">Your Markdown is shown here:</p>
                            <div className="markdown_display" dangerouslySetInnerHTML={markdown_txt}></div>
                        </div>
                    </div>
                </div>
                <PageFooter/>
            </div>
        );
    }
}
class PageHeader extends React.Component {
    render() {
        return (
            <nav className='navbar'>
                <div className='container'>
                    <div className='h2 text-center'>Markdown Previewer
                    </div>
                </div>
            </nav>
        )
    }
}
class PageFooter extends React.Component {
    render() {
        return (
            <footer>
                <div className=''>Designed by Clarence Williamson
                </div>
            </footer>
        )
    }
}

ReactDOM.render(
    <Markdown/>, content);
