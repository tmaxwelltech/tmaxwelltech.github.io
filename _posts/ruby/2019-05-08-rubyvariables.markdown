---
layout: post
title: "Ruby Variables"
date: 2019-05-07 15:21:52 -0700
categories: Ruby Logging Variables Two
permalink: /rubylesson2
---

> "The leap from traditional calculators to the power of computer programming really begins when we turn to variables, operations with variables and input/output commands."
>
> -John Keyser, _How to Program: Computer Science Concepts and Python Exercises_

The quote above is taken from the [Great Courses](https://www.thegreatcourses.com/) course on CS. I am a huge fan of The Teaching Company, aka The Great Courses. The courses are not free, but they are money very well spent! So this is how you declare a variable in Ruby:

```Ruby
x = 'the data'
```

This simple idea can become a source of great confusion. This is where you have to start thinking like a computer. Think of a variable as a box where data can be stored. The `=` sign means something different then you are used to. `=` is an assignment operator. When dealing with code `=` should be read 'is assigned' and NOT 'equals' as you have been saying all your life. Okay, let's get started:

```bash
$ mkdir ruby         //creates a new directory called ruby
```

This step is only if you do not have a ruby directory. See [lesson one](/rubylesson1). If you did lesson one, you only need to type:

```bash
$ cd ruby            //makes ruby the new working directory
$ touch variable.rb  //creates a new file variable.rb
$ atom .             //opens the ruby directory in Atom
```

In Atom, or the text editor of your choice type:

```ruby
x = 'the data'
# English translation: 'The variable x is assigned the string, 'the data'.'
```

The best way to think about what is happening here is you have labeled a 'box'(i.e. some microscopic bit of your computer's memory) x. Inside that box, you have placed some data. In this case, it's a string of text, `'data'`, but it could have been anything from an age, birthday, social security number, you get the idea. Next time, we'll talk about strings.
