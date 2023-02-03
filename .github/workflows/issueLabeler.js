module.exports = ({github, context}) => {
    //Verify that version information is present in the issue body, and the version matches the latest release.

    //get the issue
    const issue = context.payload.issue;
    const body = issue.body;
    console.log(body);
    //parse the body, check for version matching

    //get the latest published version

    //check if the version in the body matches that

    //apply label/remove label if not; proceed if yes

    //Closes issues with a comment if it has any of the following labels:

    return context.payload.client_payload.value
};
