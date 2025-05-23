## Git Hidden Folder

There is a hidden folder called `.git` which tells you that our project is a git repo.

If we wanted to create a git repo in a new project we create the folder and the initialize that repo using `git init`

```sh
mkdir /workspaces/tmp/new-project
cd /workspaces/tmp/new-project
git init
touch Readme.md
code Readme.md
git status
git add .
# makes chnges to readme.md
git commit -a -m "add readme file"
```

## Cloning 

We can clone three ways: HTTPS, SSH, Github CLI

Since we are using Github Codespaces we'll create a temporary directory in our workspace

```sh
mkdir /workspace/tmp
cd /workspace/tmo
```

### HTTPS

```sh
git clone https://github.com/hyps4310/GitHub-Foundations-Learning.git
cd GitHub-Foundations-Learning
```

> You'll need to generatea Personal Access Token (PAT)
https://github.com/settings/personal-access-tokens

You will use the PAT as your password when you login

-Give it access to Content for Commits

### SSH

```ssh
git@github.com:hyps4310/GitHub-Foundations-Learning.git
cd GitHub-Foundations-Learning
```

We will need to create our own SSH rsa key pair

```sh
ssh-keygen -t rsa
```

For WSL users and if you create a non default key you might need to add it 

```sh
eval "$(ssh-agent)"
ssh-add /home/chunc/.ssh/wsl-hyps4310_id_rsa 
# not .pub
```

We can test our connection here:
```
ssh -T git@github.com
```
and we shall see something like this
```
Hi hyps4310! You've successfully authenticated, but GitHub does not provide shell access.
```

### Github CLI

Install the CLI 

eg. Linux (Ubuntu)
```sh
sudo apt update
sudo apt install gh
```

After install the gh, we login to our account with

```
gh auth login
```

What account do you want to log into? 
```
Github.com
```

What is your preferred protocol for Git operations on this host?
```
SSH
```

Upload your SSH public key to your Github account? 
```
/home/chunc/.ssh/wsl-hyps4310_id_rsa.pub
```

Title for your SSH key:
```
Local WSL hyps4310
```

How would you like to authenticate Github CLI?
```
Login in with a web browser
```
, then follow the instruction.

After this, we clone the repo with
```
gh repo clone hyps4310/GitHub-Foundations-Learning
```

If you encounter the issue that push permission is denied, use the method mentioned in SSH part, and check the connection. Make sure you choose the right SSH key and it's functioning.



## Commits 

When we want to commit code we can write git commit which will open up the commit edit message in the editor of choice.

```sh
git commit
```

Set the global editor
```
git config --global core.editor emacs
```

Make a commit and commit message without opening an editor
```sh
git commit -m "add another exclamation"
```

## Branches

List of branches

```
git branch
```

Create a new branch 

```
git branch branch-name
```

Checkout the branch 

```
git checkout branch-name
```

## Remotes

We can add remote but often you will just add remote via upstream when adding a branch

```sh
git remote add ...
git branch -u origin new-feature
```

## Stashing

```
git stash list
git stash
git stash save my-name
git stash apply
git stash pop
```

## Merging

```
git checkout dev
git merge main
```


## Add

When we want to stage changes that will be included in the commit.
We can use the . to add all possible files.

```
git add Readme.md
git add .
```

## Reset 

Reset allows you to move Staged changes to be unstaged.
This is useful when you revert all files not to be not commited

```
git add .
git reset
```

## Status 

Git status shows you what files will or will not be commited.

```
git status
```

## Gitconfig file

The gitconfig file is what stores your global configurations for git such as email, name, editor and more. 

Showing the contents of oour .gitconfig file
```
git config --list
```

When you first install Git on a machine you are suppose to set up your name and email

```sh
git config --global user.name "Chun-Cheng Huang"
git config --global user.email "chun.cheng0702@gmail"
```

## Log 

git log will show recent git commit to the git tree

## Push

When we want to push a repo to our remote origin 

```
git push
```