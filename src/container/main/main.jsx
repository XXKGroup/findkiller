import VirtualMachine from 'scratch-vm'
import React from 'react'
import {ScratchStorage} from 'scratch-storage'
import AudioEngine from 'scratch-audio'
import ScratchRender from 'scratch-render'

class Main extends React.Component
{
    constructor (props) {
        super(props);
        this.vm = new VirtualMachine();
        this.audioEngine = new AudioEngine();
        this.renderer = new ScratchRender();
        this.state = {};
    }
    
    componentDidMount () {
        this.vm.attachStorage(this.storage);
        this.vm.attachAudioEngine(this.audioEngine);
        this.vm.attachRenderer(this.renderer);
        fetch('/main.sb3').then(response => response.arrayBuffer()).then(buffer => this.vm.loadProject(buffer));
    }
    
    render () {
        return (
            <div>
                <h1>Scratch</h1>
            </div>
        )
    }
}

export default Main;