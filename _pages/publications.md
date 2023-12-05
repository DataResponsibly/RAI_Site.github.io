---
layout: page
permalink: /research/
title: 
description: 
#years: [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015]  # replace with your own years
years_priv: [2023, 2022, 2020, 2018, 2017]  
years_rank: [2023, 2022, 2021, 2019, 2018, 2017, 2016, 2015]  
years_edu: [2023, 2022, 2021, 2020]  
years_fair: [2023, 2022, 2021, 2020, 2019, 2017]  
years_expl: [2023, 2022, 2020, 2019]  
years_pol: [2023, 2022, 2020, 2019, 2018, 2017]  
nav: false
nav_order: 2
---

<div id="banner-other" style="background-image: url('{{ "/assets/img/banner/Research_Banner.png" | relative_url }}');"></div>

<!-- <h3 class="category" id="research">Research</h3> -->

Here you can dive into the heart of our work at the Center for Responsible AI -- our research. 

Our ongoing investigations are organized around several major themes:
[data-centric AI and responsible data management](#data-centric),
[resonsible AI education and training](#education),
[explainability](#explainability), [algorithmic fairness](#fairness),
[AI policy and regulation](#policy), [privacy and data
protection](#privacy), and [responsible ranking design](#ranking).

Below, you will find an extensive compilation of our academic
publications and software artifacts, providing a window into our
scholarly contributions. Each entry includes an external link to the
full text of the paper for a comprehensive understanding.

In addition, you can explore our ongoing [technology policy](/policy) and
[education](/education) projects, complete with detailed descriptions and direct
links to the project repositories. We hope that this collection of
resources will serve as a valuable tool for researchers, students, and
the broader community to engage with our work.

<!-- _pages/publications.md -->
<div class="publications">

<h4 class="category" id="data-centric">Data-centric AI and responsible data management</h4>

Incorporating ethics and legal
compliance into data-driven algorithmic systems has been attracting
significant attention from the computing research community, most
notably under the umbrella of fair and interpretable machine
learning. While important, much of this work has been limited in scope
to the last mile of data analysis and has disregarded both the
system’s design, development, and use life cycle (What are we
automating and why? Is the system working as intended?  Are there any
unforeseen consequences post-deployment?) and the data life cycle
(Where did the data come from? How long is it valid and
appropriate?). Our work on data-centric responsible AI and on
responsible data management is based on the observation that the
decisions we make during data collection and preparation profoundly
impact the robustness, fairness, and interpretability of the systems
we build.

  {% for y in page.years_expl %}
    <h2 class="year">{{y}}</h2>
    {% bibliography -f papers -q @*[year={{y}} && keywords ^= *data]* %}
  {% endfor %}

  <h2 class="category" id="explainability">Explainability</h2>
  <!-- Add your category specific text here -->

There is a variety of terms associated with this topic: transparency,
interpretability, explainability, intelligibility.  But let’s not get
too tangled up in terminology.  The main point is that we need to
allow people to understand the data, the operation, and the decisions
or predictions of an AI system, and to also understand why these
decisions or predictions are made.  This understanding is critical
because it allows people to exercise agency and take control over
their interactions with AI systems.  And so, no matter what
terminology we use, the overarching idea behind transparency & friends
is to expose the “knobs of responsibility” to people, as a means to
support the responsible design, development, use, and oversight of AI
systems.


{% for y in page.years_expl %}
    <h2 class="year">{{y}}</h2>
    {% bibliography -f papers -q @*[year={{y}} && keywords ^= *explainability]* %}
  {% endfor %}

  <h2 class="category" id="fairness">Fairness</h2>
  Algorithmic fairness is a central topic in responsible AI.  Fairness is a complex concept, and we
treat it through a socio-legal-technical lens, in ways that are domain- and context-specific. We always start
with a statement of the normative criteria (what are we trying to accomplish and why?), and propose technical solutions only as appropriate, in ways that align with the 
normative criteria. 
Highlights of our work include fairness in ranking, connections between equality of opportunity from political philosophy
and algoroithmic fairness, and investigating the trade-offs between fairness and other normative dimensions of responsible AI.   

  <!-- Add your category specific text here -->
  {% for y in page.years_fair %}
    <h2 class="year">{{y}}</h2>
    {% bibliography -f papers -q @*[year={{y}} && keywords ^= *fairness && keywords ^= *fair]* %}
  {% endfor %}

  <h2 class="category" id="policy">Policy</h2>
  We engage in <a href="../policy/">technology policy</a> work in the US and internationally.   
  These practical engagements are based
  on our research, highlighted below.

  <!-- Add your category specific text here -->
  {% for y in page.years_pol %}
    <h2 class="year">{{y}}</h2>
    {% bibliography -f papers -q @*[year={{y}} && keywords ^= *policy]* %}
  {% endfor %}
  
  <h2 class="category" id="privacy">Privacy</h2>
  Our work in privacy includes peer-reviewed papers, as well as tools and benchmarks.
  Take a look at the <a href="https://github.com/DataResponsibly/DataSynthesizer">Data Synthesizer</a> tool
  that we've been using to teach differentially private data synthesis.  
  And check out our latest DP synethetic data benchmarking package,
  <a href="https://github.com/DataResponsibly/SynRD">SynRD</a>, posing the question: 
  "Can a DP synthesizer produce private (tabular) data that preserves scientific findings?" 
  In other words, do DP synthesizers satisfy epistemic parity?

  <!-- Add your category specific text here -->
  {% for y in page.years_priv %}
    <h2 class="year">{{y}}</h2>
    {% bibliography -f papers -q @*[year={{y}} && keywords ^= *privacy && keywords ^= *priv] %}
  {% endfor %}

  <h2 class="category" id="ranking">Ranking</h2> One kind of algorithm
  that is at once especially obscure, powerful, and common is the
  ranking algorithm. Algorithms rank individuals to determine credit
  worthiness, desirability for college admissions and employment, and
  compatibility as dating partners. They encode ideas of what counts
  as the best schools, neighborhoods, and technologies. Despite their
  importance, we actually can know very little about why one person
  was ranked higher than another in a dating app, or why one school
  has a better rank than that one. This is true even if we have access
  to the ranking algorithm, for example, if we have complete knowledge
  about the factors used by the ranker and their relative weights, as
  is the case for US News ranking of colleges.  We have been working
  on several aspects of responsible ranking design and use, including
  fairness, transparency and interpretability, and stability.

  <!-- Add your category specific text here -->
  {% for y in page.years_rank %}
    <h2 class="year">{{y}}</h2>
    {% bibliography -f papers -q @*[year={{y}} && keywords ^= *ranking && keywords ^= *rank] %}
  {% endfor %}

  <h2 class="category" id="education">Responsible AI Education</h2>
<!-- Add your category specific text here -->
We cannot understand the impact – and especially the risks – of AI
systems without active and thoughtful participation of everyone in
society, either directly or through their trusted representatives.  To
think otherwise is to go against our democratic values. To enable
broad participation, we have been developing responsible AI curricula
and methodologies for different stakeholders: university students,
working practitioners, and the public at large. In this section, you
will find our publication on responsible AI education.  Take a look at
the <a href="/education">education</a> area of the site to access our
courses and other open-source materials we have developed.

  {% for y in page.years_edu %}
    <h2 class="year">{{y}}</h2>
    {% bibliography -f papers -q @*[year={{y}} && keywords ^= *edu ]* %}
  {% endfor %}

</div>
