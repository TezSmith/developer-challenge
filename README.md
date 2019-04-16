<img src="https://www.algolia.com/static/logo-algolia-nebula-blue-full-57c56ea4b99b30c8f2cc03b65e8bb849.png" height="100" width="auto" >

# 🎟 Developer support engineer assignment

This is the assignment you need to complete as part of your application to the **developer support engineer (remote OK)** role at [Algolia](http://algolia.com/).

## Goal

This assignment is in two parts:
1. Answering support tickets
2. Creating an Algolia demo out of some data

**Required time to complete:** We do no ask you to complete this in a specific time frame, but be ready to spend between two and five hours depending on your experience with Algolia.

**Important:** Algolia will never reuse your work. This assignment is for evaluation purposes only.

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [1. Answering support tickets](#1-answering-support-tickets)
- [2. Creating an Algolia demo out of some data](#2-creating-an-algolia-demo-out-of-some-data)
- [Delivering your assignment](#delivering-your-assignment)
- [Notes](#notes)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 1. Answering support tickets

We have extracted and anonymized some real support tickets we got on our support system at Algolia. Then we created a fake support mailbox in this repository inside the [1.algolia-support-mailbox/](./1.algolia-support-mailbox) folder.

This mailbox is the same one as we deal with on a daily basis, the order of the tickets is time based. So ticket like `01 - Name of ticket.md` was received first.

We use [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) so that you can do any formatting you want like you would in a real email: links, quotes, images, bold...

**Your goal is to:**
- Answer all of the six questions.
- Write the corresponding answer inside the original ticket file, for each ticket (you can also add notes to them)

# 2. Creating an Algolia demo out of some data

Inside the [2.data/](./2.data) folder lies a `data.json` file which contains an extract from a database to be used to create an Algolia index. Use this data to create an instant-search webpage experience with Algolia and configure the relevancy as if you would use it for a real application.

You are allowed to reformat, clean and fix the data based on your own judgement, experience and Algolia features.

**Your goal is to:**
- Create an account on Algolia
- Create an indexing script that will generate an Algolia index out of the data
- Configure the index relevancy as best as you can so the results are relevant and could almost be used on a real website
- Create an instant-search webpage demo in the [demo](./demo) folder, using any web frontend flavour of InstantSearch you want: https://www.algolia.com/products/instantsearch

Your indexing script can be made of one or multiple files, can be written in any programming language you are the most comfortable with and you can reuse any existing module you like.

Your demo can use any technology but must use InstantSearch. For example, you can use [TypeScript](https://www.typescriptlang.org/) as long as you still use InstantSearch along with it.

Please provide us a way to see your demo live easily. A script if there's a build step, or make it so that we can open an HTML file in a browser. The easiest for us to see your demo in a browser, the better.

# Delivering your assignment

Reply to the person that sent you the assignment with a zip containing your modified files. Most probably email clients won't allow you to add this zip file directly so you can use any of Google Drive, Dropbox to save your file and send us a link to download it.

Please also send us in the email:
- The application id and index name you created, please do [allow Algolia to access your index data](https://www.algolia.com/users/edit#?tab=access-control) for one month.
- Any explanation you feel like is necessary to understand your thinking, reasoning and the challenges you faced
- The approximate time in hours it took you to complete this assignment
- Any feedback on the assignment itself

# Notes

Be careful not to publish your Algolia admin API key in the final zip. Make it so that your script reads your Algolia credentials in a way so that you can pass it on the command line but they are not stored in the code.

Your search-only API key and application ID can be directly living inside your code (and should if you want us to see a demo).

When dealing with tickets, you can take for granted that you are able to do any modification on a user account at any moment to help them, even temporarily.

It's OK to reuse the demo from the [docs/index.html](docs/index.html) for your own demo.

It's OK to create a local GIT repository and send it back as a ZIP file.

If you have any question, please send them to ajay.david@algolia.com and vincent.voyer@algolia.com.
