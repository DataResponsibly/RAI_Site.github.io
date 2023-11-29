---
layout: page
title:
permalink: /education/
nav: false
nav_order: 4
#display_categories: [comics, nyu_classes, reports, tools]
display_categories: [students, practitioners, public, comics]
horizontal: false
---

<!-- <div id="banner-other" style="background-image: url('{{ "/assets/img/banner/M5-banner.png" | relative_url }}');"></div> -->

<h3 class="category" id="education">Education</h3>

Education stands as the cornerstone of our work at the Center for
Responsible AI. Understanding the profound implications of AI on
society necessitates a comprehensive and inclusive approach to
education. We conduct cutting-edge research, offer a wide range of
courses, and develop educational material geared towards students,
professionals, and the broader community. Our goal is to empower
learners with the knowledge and critical thinking skills to actively
shape the trajectory of AI technology.

<h4 class="category" id="rds">Responsible data science</h4>

Responsible Data Science is a **comprehensive technical course for
university students**.  This course tackles the issues of ethics,
legal compliance, data quality, algorithmic fairness and diversity,
transparency of data and algorithms, privacy, and data
protection. This course was developed and offered for the first time
in [Spring 2019](https://dataresponsibly.github.io/courses/spring19).
Since then, it has been offered every Spring to undergraduate and
graduate students in data science, computer science, and related
disciplines at New York University.

The most recent offering of the course was in [Spring
2023](https://dataresponsibly.github.io/rds23/).  The course will be
offered again in Spring 2024. You can find the most recent lecture
slides, lab notebooks, and readers on the [course
website](https://dataresponsibly.github.io/rds/).  All course
materials are publicly available online.

<h5>Read more about this course</h5>

<div class="publications"> 
{% bibliography -f papers -q @*[keywords ^= *rds]%}
</div>

<h4 class="category" id="playground">The causal inference playground</h4>

What is causal inference? And how can we use causal inference
techniques to answer questions about the real world?  Take a tour
through our [Causal inference
playground](https://r-ai.co/ci-playground)
for a rigorous and fun introduction to this topic!

<h5>Read more about this course</h5>

<div class="publications"> 
{% bibliography -f papers -q @*[keywords ^= *playground]%}
</div>

<h4 class="category" id="playbook">The algorithmic transparency playbook</h4>

Welcome to 2033, the year when AI, while not yet sentient, can finally
be considered responsible. Only systems that work well, improve
efficiency, are fair, law abiding, and transparent are in use
today. It’s AI nirvana. You ask yourself: “How did we get here?”

You may have played a major role! As more organizations use
algorithmic systems, there is a need for practitioners, industry
leaders, managers, and executives to take part in making AI
responsible. In our [Algorithmic Transparency
Playbook](https://dataresponsibly.github.io/algorithmic-transparency-playbook/)
course, we detail how to influence change and **implement algorithmic
transparency in your organization**.

<h5><b>Read more about this course</b></h5>

<div class="publications"> 
{% bibliography -f papers -q @*[keywords ^= *playbook]%}
</div>

<h4 class="category" id="weareai">We are AI: Taking control of technology</h4>

Artificial Intelligence (“AI”) refers to a growing world of
sophisticated computer programs that “learn” from data in order to
make decisions. Many of these AI systems are invisible to the public,
yet the results of the decisions they make (or help humans make) have
a huge impact on modern life.

Because of how important AI is in our lives, we should understand how
it works so that we can control it together!  NYU R/AI has partnered
with [P2PU](https://www.p2pu.org/en/), a public education non-profit,
and with the [Queens Public
Library](https://www.queenslibrary.org/about-us/news-media/blog/2482)
to develop [We are AI: Taking control of
technology](https://r-ai.co/We-are-AI), a **public
education course on AI**.

This course is designed to be run as a learning circle: a facilitated
study group for people who want to meet regularly and learn about a
topic with others. There are no teachers or students in a learning
circle—it is a group where everyone learns the material together.

The goal of the course is to introduce the basics of AI, discuss some
of the social and ethical dimensions of the use of AI in modern life,
and empower individuals to engage with how AI is used and governed.

We have also partnered with the [NYU Tandon Ability
Project](http://ability.nyu.edu/) to improve the accessibility of AI
education across abilities and levels of expertise.  The result of
this work is our [All Aboard! primer](http://r-ai.co/AllAboard) on
making AI education accessible.

<h5><b>Read more about this course</b></h5>

<div class="publications"> 
{% bibliography -f papers -q @*[keywords ^= *weareai]%}
</div>

<h4 class="category" id="comics">Responsible AI comics</h4>

Responsible AI is an intimidating topic.  We have been developing
comics for AI enthusiasts, practitiners and the public at large, to
bring humor into the conversation, and help us -- humans -- take
ownership of the debate about the role that AI should play in our
lives.

You can read the complete [We are AI
comics](https://r-ai.co/WeAreAI_ComicsSeries) in English and Spanish.
The first volume of We are AI is also available in
[Greek](https://dataresponsibly.github.io/comics/we-are-ai/Vol1_gk.pdf). Our
[Data, Responsibly comics](https://dataresponsibly.github.io/comics/)
are available in English
([vol. 1](https://dataresponsibly.github.io/comics/vol1/mirror_en.pdf)
and
[vol. 2](https://dataresponsibly.github.io/comics/vol2/fairness_en.pdf)),
[French](https://dataresponsibly.github.io/comics/vol1/mirror_fr.pdf),
[Spanish](https://dataresponsibly.github.io/comics/vol1/mirror_es.pdf),
and [Brazilian
Portugueze](https://dataresponsibly.github.io/comics/vol1/mirror_br.pdf).


<h5><b>Read the comics (English)</b></h5>

<div class="publications-div"> 
{% bibliography -f papers -q @*[keywords ^= *comics && keywords ^= *english]%}
</div>
<p><h5><b>Read the comics (Spanish)</b></h5>

<div class="publications-div"> 
{% bibliography -f papers -q @*[keywords ^= *comics && keywords ^= *spanish]%}
</div>

<p><h5><b>Read the comics (other languages)</b></h5>

<div class="publications-div"> 
{% bibliography -f papers -q @*[keywords ^= *comics && keywords ^= *other]%}
</div>
