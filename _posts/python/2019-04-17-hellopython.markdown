---
layout: post
title: "Hello Python"
date: 2019-04-17 15:21:52 -0700
categories: Python Logging
---

Ruby and Python ...

I will explain how to get this program running in a UNIX based environment. I wouldn't know where to start this in Windows!

The following commands will make a new directory, make that new directory the working directory, create a new file within that directory and finally open that directory in the Atom text editor.

```bash
$ mkdir python         //creates a new directory called python
$ cd python            //makes python the new working directory
$ touch hello.py       //creates a new file hello.py
$ atom .               //opens the python directory in Atom
```

It should look something like this:

{% include image.html url="/img/atompy.png" description="Atom!" %}

Type the following into the `hello.rb` file.

```python
  print("Hello, world!")
```

From the command line, within the `python` directory type the following:

```bash
$ python3 hello.py
```

and press enter. If all goes well, you should see this:

```bash
$ python3 hello.py
Hello, world!
$
```

You did it!
