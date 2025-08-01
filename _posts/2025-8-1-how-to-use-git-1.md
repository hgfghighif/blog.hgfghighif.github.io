---
layout: post
title: "How to use Git? - Part 1 - Basics"
categories: git tutorial
author:
- Henry Godman
modified_date: 2025-8-2
---

Hey, this is Henry Godman speaking, (well, more writing!), I'll learn you how to use the basics of Git.

## First part - setting up
For now, we wll use GitHub with Codespaces, this way it already sets up Git so you don't have to worry about that.

1. Create a GitHub repository, name it what you want.
2. Make sure to initialize with a README.
3. Click the green "code" button, go to "Codespaces" tab and press "Create Codespaces on main"

## Second part, commit & pushing
Right now for the challenge we are gonna use the Terminal! Not to make your changes, but to commit and push.

1. Do some changes (create files, edit files, rename files, move files, delete files, etc...)
2. Focus on the terminal, this is a Linux Terminal, Codespaces usually run Ubuntu.
3. In the terminal, write `git add .` you should see no output.
4. After that, write ``git commit -m "your commit msg"`` (**Note**: Your commit message can be whatver you want.)
You should see an output like:
```text
[main 1c0ed5e] update pages
 3 files changed, 12 insertions(+), 13 deletions(-)
 delete mode 100644 _posts/2025-7-30-test.md
 create mode 100644 _posts/2025-7-31-welcome.md
```
That's good, it means it works.
5. If you go back to your GitHub repo, you can see that your commit is not here! But don't worry you just need to push it by writing ``git push``
6. And now if you go back, you can see that your commit was successfully pushed!

And that's all for now! Next were gonna learn how to set up Git in another environement like MSYS2, Git Bash or Termux.