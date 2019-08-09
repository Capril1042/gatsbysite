// Takes in a project object and returns 
// true if required fields are present and false if 
// required feilds are not present

//TODO: define more critera for a vaild project and update

export default function validateProject(project) {
if (project.title === '' || 
    project.imageUrl === '' ||
    project.description === ''||
    project.gitHubLink === '') {
        return false
    } else {
        return true;
    }
};