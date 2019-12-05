import React from 'react';

const Upload = () => {
    const handleSubmit = (submitEvent) => {
        submitEvent.preventDefault();
        console.log(document.getElementsByName('tags[]').value);
    }
    const addMoreTags = () => {
        let div = document.createElement('div');
        let newTag = `<input type="text" name="tags[]" className="tags"></input>` ;
        div.innerHTML = newTag;
        document.getElementById('tags').appendChild(div)
    }
    return (
        <div>
            <form id="upload-form" onSubmit={handleSubmit}>

                <label name="title">title</label>
                <input type="text" name="title"></input><br/>

                <div id="tags">
                <label name="tags">tags</label>
                <input type="text" name="tags[]" className="tags" multiple></input>  
                <a onClick={addMoreTags} id="add-more-tags">add more tags</a> <br/>
                </div>

                <label name="video"></label>
                <input type="file" name="video"></input><br/>

                <button>Upload</button>
            </form>
        </div>
    );
}

export default Upload;
