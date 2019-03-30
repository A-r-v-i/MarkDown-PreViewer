import React, { Component } from 'react'
import '../components/markdown.css'

let marked = require("marked");

export default class markdown extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            text: `Heading
=======
Sub-heading
-----------
### Another deeper heading
Paragraphs are separated
by a blank line.
Leave 2 spaces at the end of a line to do a
line break
Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .
Shopping list:
* apples
* oranges
* pears
Numbered list:
1. apples
2. oranges
3. pears
The rain---not the reign---in
Spain.
----------
| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |
[![An old rock in the desert](/assets/images/shiprock.jpg "Shiprock, New Mexico by Beau Rogers")](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)
`
        }
    }

    updateText(text) {
        this.setState({text})
    }

    clearText() {
        this.setState({
            text: ''
        });
    }
  render() {
    return (
      <div className="App-container">
          <div id="textArea">
              <h1>Markdown here</h1>
              <textarea value={this.state.text} onChange={(event) => {this.updateText(event.target.value)}} />
              
          </div>
          <div id="preview">
              <h1>Your preview</h1>
              <div dangerouslySetInnerHTML={{__html:marked(this.state.text)}} />
          </div>
      </div>
    )
  }
}
