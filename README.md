
# Food Insecurity App --- NAME TBD

View on [...our deployed site](#)

## About the Project

...Description of project

## Team Coding Standards

(add link to document)

## Team Git Process

_Use Git from the command line_

### GOAL

Keep a well-documented repo with small commits within each push so that any necessary reversions are easy and manageable.
 
### WORKFLOW

#### CLONE THE GITHUB REPO 
1. To get started, clone the project repo into a directory (aka folder) on your local machine.  To do this, navigate to the directory where you want the project to live.  Then, at the command line, type:

       git clone https://github.com/amymcgowan/mcc-c4-t2-final-project.git

2. You should now have a .git directory which will track the status of your project files locally.
 
#### BRANCHES

The master branch on the remote project repo will be only for finished work ready for deployment.  So, let’s save ourselves headaches and never work directly on master.  Do the work on a feature branch.  Before creating a feature branch, though, make sure that your master is synced with the current state of the remote repo.  Here’s how we do all of that.
1. Navigate to your local master branch.

       git checkout master

2. While on your local master branch and before creating any feature branches, merge any changes from the remote project repo (aka, the origin) - which is at https://github.com/amymcgowan/mcc-c4-t2-final-project.git - into your local master:

        git pull origin master

3. As mentioned above, please always create a feature branch to do your work.
 In Git, it looks like this (first line names the local feature branch; second line switches to it):

        git branch feature-branch-name
        git checkout feature-branch-name

    or if you prefer, combine these steps into one:

        git checkout -b feature-branch-name

It bears repeating: please never work on master.  Always create a feature branch! Thanks :)

#### COMMITS

1. Commit often. Bite-size pieces of work are the right size for commits.  That makes it easier to revert when necessary.  Don’t wait until the entire feature is done if it’s not small.

        git add .
        git commit -m "Add stats about college hunger"  
        
    (example commit message)

##### Commit Messages
2. A good git commit message completes the sentence…

    If applied, this commit will \<your commit message here>
3. Begin with an imperative verb stating what the commit will change.  For example:

    GOOD: “Make buttons clickable”  
    NOT: “Made buttons clickable” or “Makes buttons clickable”

4. Keep commit messages concise (about 50 characters) and descriptive.
5. If addressing an issue in the Github repo, include the issue number in the message (e.g., “Fix Issue #22 to add alt text to images”)

#### PREP TO PUSH

If there have been changes to the remote that are not reflected in your local repo, then there will be a CRAZY amount of frustrating conflicts when you push and create a PR.  So first, let’s do a final check that everything you have is updated from the remote.  

On your device, if you are not already on your master branch, then navigate there first with

    git checkout master
Merge all of these changes into your master on your local repo.

	git pull origin master

Lastly, switch back to your feature branch that you have been working on and merge those changes on master into your feature branch

    git checkout <feature-branch-name>
    git merge master

This final command may cause your editor to open (you can leave a commit message if it’s clear on how to do so).  If it does, just close it out and git should move on. 

Make sure that the changes you just merged in from master do not cause any conflicts.  If there are conflicts, you’ll need to resolve them before you push.

Now you are ready to push all your commits on your feature branch to the remote repo on GitHub!

#### PUSH 
1. **Do not push to master.** After you have made your commit(s) on your feature branch, it’s time to push them to feature-branch-name on the remote repo.  If feature-branch-name doesn’t exist yet on the remote repo, it will after running this command.

        git push origin <feature-branch-name>

    The first time you push to the new feature branch, you may need to set it upstream with a `-u` flag (you’ll get an error message telling you this if you need to do it).  After the first push, you can leave it off and just push as stated above.

	    git push -u origin feature-branch-name
 
#### PULL REQUESTS (PR)

1. In Github, do a PR that compares the remote master branch to the feature branch you want to add.
 	If you have just made a new push to GitHub, you may find a green button appear on GitHub that allows for you to create a new PR.  If not, you can go the Pull Request tab in the repo and create a new PR with the green button there. 
 
2. Info needed in a PR:
  
    a. Explain why the work is happening. Including an issue number can help with this. 
    
    Examples:
    
    “I fixed the bug that was causing extra space to appear on the right side in mobile view.”  
    “I’ve fixed issue #10 by creating…” 

    b. You can put more detailed information in the body of the PR, but try to hit only the main points to help someone understand what you did in the code. It’s easy to get lost if there is too much detail or not enough information.  Think Goldilocks and provide a happy medium.
3. Review the PR. Amy will do all PR reviews except for her own. She will request reviews from the other team members, and the first one to get to it can review and approve it.
4. Approve the PR. Again, Amy will do all PR approvals except her own.  If there are no merge conflicts, approve it, and the feature branch will merge with master.
After the merge, delete the feature-branch-name on the remote.
 
 
#### UPDATE YOUR LOCAL
 
This step is *critical* to avoiding merge conflicts.  After you or someone else has approved the change and merged it on the remote, you must update your local repo.  Your local master branch, despite what your shell may seem to be telling you, is not updated with the changes made to the remote yet.  Let’s fix that.
 
1. While on the master branch, update it to reflect the remote master branch. Do this (1) after every push to remote and (2) every time you sit down to work.
 
        git pull origin master
 
2. Either delete the local feature-branch-name you were previously working on OR if you’re not done working on it, then update it to contain all the current code.
 
    Delete feature-branch-name:  
    a. Navigate to your local master.  
    b. Run:

        git branch –d feature-branch-name
 
    OR
 
    Update the feature-branch-name:  
    a. Navigate to the feature branch.  
    b. Run:

       git merge master


#### CODE ON! :)



## Project Wireframe

The wireframe was built in Figma, which can be viewed [here](#).

## Contact

Amy McGowan
* Team Lead, Visual Design Lead
* Portfolio: [amymcgowan.dev](https://amymcgowan.dev/)
* GitHub: [amymcgowan](https://github.com/amymcgowan)

Andrea Martz
* Research Co-Lead, HTML Lead, CSS Associate, Accessibility
* Portfolio: [url](#)
* GitHub: [username](https://github.com/username)

Sherry Nance
* CSS Lead, Visual Design Associate
* Portfolio: [url](#)
* GitHub: [username](https://github.com/username)

Aiko Takemura
* Research Co-Lead
* Portfolio: [url](#)
* GitHub: [username](https://github.com/username)


