import React, { useState } from "react";
import { navigate } from "gatsby";

import validateProject from "../utils/validateProject";
import addProject from "../services/createproject";
import updateProject from "../services/updateproject";

function CreateProjectForm(props) {
    const [title, setTitle] = useState("");
    const [imageURL, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const [gitHubLink, setGitHubLink] = useState("");
    const [link, setLink] = useState("");
    const [message, setMessage]= useState("Add a New Project");

    
  const resetForm = () => {
    setTitle("");
    setImageUrl("");
    setDescription("");
    setGitHubLink("");
    setLink("");
  };

    const handleSubmit = e => {
        const project = {
            title: title,
            imageURL: imageURL,
            description: description,
            gitHubLink: gitHubLink,
            link: link
        };

        e.preventDefault();
        const isVaild = validateProject(project);
        if (isVaild) {
            // add project to database
            if ( props.type === 'create') {
            addProject(project);
            setMessage("A new project was Added")
            resetForm();
            } else {
                updateProject(props.projectId, project);
                navigate('/admin/projects');
            }
            console.log(`add project and reset form`)
        } else {
            // show messge ( project wasnt added )
            setMessage("New Project was not Added: include the required fields")
            console.log(`display vaildation Error`)
        }
    }

    return (
        <div>
        <span>{message} </span>
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input
                 type="text"
                 name="title"
                 value={title}
                 onChange={e => setTitle(e.target.value)}
                />
            </label>
            <label>
                Image URL:
                <input
                 type="text"
                 name="imageURL"
                 value={imageURL}
                 onChange={e => setImageUrl(e.target.value)}
                />
            </label>
            <label>
                Description:
                <textarea
                 type="textarea"
                 name="description"
                 value={description}
                 onChange={e => setDescription(e.target.value)}
                />
            </label>
            <label>
                GitHub Link:
                <input
                 type="text"
                 name="githublink"
                 value={gitHubLink}
                 onChange={e => setGitHubLink(e.target.value)}
                />
            </label>
            <label>
                Link:
                <input
                 type="text"
                 name="link"
                 value={link}
                 onChange={e => setLink(e.target.value)}
                />
            </label>
                <input
                type="submit"
                value="Submit"
                />
      </form>
      </div>
    )
 }

export default CreateProjectForm;