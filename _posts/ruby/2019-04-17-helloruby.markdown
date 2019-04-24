---
layout: post
title: "Hello Ruby"
date: 2019-04-17 15:21:52 -0700
categories: Ruby Logging
---

Ruby and Python ...

I will explain how to get this program running in a UNIX based environment. I wouldn't know where to start this in Windows!

The following commands will make a new directory, make that new directory the working directory, create a new file within that directory and finally open that directory in the Atom text editor.

```bash
$ mkdir ruby         //creates a new directory called ruby
$ cd ruby            //makes ruby the new working directory
$ touch hello.rb     //creates a new file hello.rb
$ atom .             //opens the ruby directory in Atom
```

It should look something like this:

{% include image.html url="/img/atomrb.png" description="Atom!" %}

Type the following into the `hello.rb` file.

```ruby
  puts "Hello, world!"
```

From the command line, within the `ruby` directory type the following:

```bash
$ ruby hello.rb
```

and press enter. If all goes well, you should see this:

```bash
$ ruby hello.rb
Hello, world!
$
```

You did it!
