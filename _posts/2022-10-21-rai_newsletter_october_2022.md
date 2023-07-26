---
layout: post
title:  R/AI Newsletter - Research Highlights Issue, October 2022
date:   2023-02-15 18:49:16
description: October, newsletter
tags: october newsletter lab publications events
categories: newsletter
newsletter: true
preview: /assets/img/p1.webp
---

## Personality prediction AI used for pre-hiring screening is shockingly bad!
Our research team recently audited two popular commercial AI systems that compute “personality profiles” from resumes and social media profiles of job applicants. 
[**Read on to learn about what we uncovered!**](https://airesponsibly.net/2022/09/28/personality-prediction-ai-for-hiring/)

<div class="row mt-3">   

    <div class="col-sm mt-10 mt-md-0">
        {% include figure.html path="assets/img/p1.webp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


## What we’ve been up to:

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/newsletters/february/lightbulb.webp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

We stand with Ukraine! Over the summer, we ran a 6-week-long summer research program on Responsible AI, in collaboration with the Ukrainian Catholic University. Our 18 research fellows comprised Ukrainian graduate and undergraduate students. Read more about the program, the final project showcase, and testimonials from the fellows themselves!  We are continuing this work in the Fall, stay tuned for updates.

[**Read More**](link)


## What we have been working on:
#### [Resume Format, LinkedIn URLs and Other Unexpected Influences on AI Personality Prediction in Hiring: Results of an Audit](https://dl.acm.org/doi/10.1145/3514094.3534189)

Alene Rhea, Kelsey Markey, Lauren D'Arinzo, Hilke Schellmann, Mona Sloane, Paul Squires, and Julia Stoyanovich.
In 2022 AAAI/ACM Conference on AI, Ethics, and Society (AIES '22).

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/p2.webp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
Algorithmic personality tests are in broad use in hiring today, but do they work? We sought to answer this question by interrogating the validity of algorithmic personality tests that claim to estimate a job seeker’s personality based on their resume or social media profile. We developed a methodology for auditing the stability of predictions made by these tests. Crucially, we framed our methodology around testing the assumptions made by the vendors of these tools. We used this methodology to conduct an external audit of two commercial systems, Humantic AI and Crystal, over a dataset of job applicant profiles collected through an IRB-approved study. The key take-away is that both systems show instability on key facets of measurement, and so cannot be considered valid testing instruments for pre-hire assessment. 

[Read more](https://airesponsibly.net/2022/09/28/personality-prediction-ai-for-hiring/) about our audit, and watch a 15-minute video for a summary of our methods and findings.  And take a look at press coverage of these results in [Forbes](https://www.forbes.com/sites/drnancydoyle/2022/10/11/artificial-intelligence-is-dangerous-for-disabled-people-at-work-4-takeaways-for-developers-and-buyers/?sh=77ab36af35d3) and [HR Drive](https://www.hrdive.com/news/as-nyc-restricts-ai-in-hiring-next-steps-remain-cloudy/633576/).

### [It’s Just Not That Simple: An Empirical Study of the Accuracy-Explainability Trade-off in Machine Learning for Public Policy](https://dl.acm.org/doi/10.1145/3531146.3533090)

Andrew Bell, Ian Solano-Kamaiko, Oded Nov, and Julia Stoyanovich
In 2022 ACM Conference on Fairness, Accountability, and Transparency (FAccT ’22)

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/p3.webp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
There is a debate among machine learning researchers and practitioners about the nature – and even the existence – of the accuracy-explainability trade-off.  Is it the case that accuracy and explainability are inversely related, and, therefore, that black-box models should be used whenever accuracy is important?   Or is it the case that the trade-off rarely exists, and so interpretable models should be preferred in most cases?  In this project, we looked at the relationship between accuracy and explainability in two public policy contexts.  We neither observed a direct trade-off between accuracy and explainability nor found interpretable models to be superior in terms of explainability. It’s just not that simple!

### Fairness in Ranking Part I: [Score-based Ranking](https://dl.acm.org/doi/10.1145/3533379)
### Fairness in Ranking Part II: [Learning-to-Rank and Recommender Systems](https://dl.acm.org/doi/10.1145/3533380)

Meike Zehlike, Ke Yang, and Julia Stoyanovich
in **ACM Computing Surveys** (April 2022)

Consider Ann, a university admissions officer who uses an algorithmic ranker to select applicants from a large pool.  Ann knows that applicants’ test scores and, to some extent, their grades, can track a history of disadvantage in access to educational opportunities–good schools and tutoring–and so a ranking based on test scores and grades can be unfair.  How can Ann embed fairness requirements into her selection methodology, in a world where applicants’ qualifications and backgrounds are as incomparable as apples and oranges?
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/p4.webp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
In a two-part survey that recently appeared in the ACM Computing Surveys, we set out to help decision-makers like Ann. We developed a common narrative around the value frameworks that motivate specific fairness-enhancing interventions in ranking. This allowed us to unify the mitigation objectives and the algorithmic techniques for fair ranking that have been proposed in several subfields of computer science.  This unified view can help practitioners select a method that is responsive to their fairness requirements.

### [Towards Substantive conceptions of Algorithmic Fairness: Normative guidance from Equal Opportunity doctrines](https://eaamo.org/papers/khan-19.pdf)
Falaah Arif Khan, Eleni Manis, and Julia Stoyanovich

In 2022 ACM Conference on Equity and Access in Algorithms, Mechanisms, and Optimization [(EAAMO ’22)](https://eaamo.org/)

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/p5.webp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
We all agree that fairness is not a statistical concept, but rather a philosophical and moral one. But we don’t really understand the normative dimensions of fairness-enhancing interventions, and don’t have a way to debate in values… or at least we didn’t, until now! In this work we use Equal Opportunity doctrines from political philosophy to make explicit the value judgements embedded in different fairness criteria. This framing allows us to characterize the context of decision-making through the nature of opportunity being allocated, and to re-interpret the impossibility results from a moral perspective: different conceptions of a fair contest are mutually incompatible when people do not have fair life chances. This motivates the need for substantive framings of algorithmic fairness, which we outline in the rest of the paper.

Read the [full paper](https://dl.acm.org/doi/abs/10.1145/3551624.3555303), and watch our [oral presentation](https://www.youtube.com/watch?v=wIjcniWMElU) at ACM EAAMO.

#### [An Interactive Introduction to Causal Inference](https://lbynum.github.io/interactive-causal-inference/)

[Lucius E.J. Bynum, Falaah Arif Khan, Oleksandra Konopatska, Joshua R. Loftus, and Julia Stoyanovich](https://lbynum.github.io/interactive-causal-inference/)

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/p6.webp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

What is causal inference? What is a causal question? How do we answer causal questions? In this interactive tutorial, we explore the basics of causal inference, and explain the role of randomization in answering causal questions.  Join us at our Causal Inference Playground to first gain an intuition about causal inference without too much mathematical notation, and then dive deeper into more theory and causal inference in observational settings.

## Events and Press Coverage

Members of R/AI spoke in the press about our recent research results and the recent developments in AI regulation.  
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/p7.webp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Julia Stoyanovich spoke with Vox about the [**White House Blueprint for an AI Bill of Rights:**](https://www.whitehouse.gov/ostp/ai-bill-of-rights/) “I was very happy to see that the Bill discusses the effectiveness of AI systems prominently. Many systems that are in broad use today simply do not work, in any meaningful sense of that term. They produce arbitrary results and are not subjected to rigorous testing, and yet they are used in critical domains such as hiring and employment.  We need to develop a culture of rigorously specifying the criteria against which we evaluate AI systems, testing systems before they are deployed, and re-testing them throughout their use to ensure that these criteria are still met. And removing them from use if the systems do not work.”  

Julia also spoke with [HR Drive])(https://www.hrdive.com/news/as-nyc-restricts-ai-in-hiring-next-steps-remain-cloudy/633576/) about New York City’s Local Law 144 that aims to regulate the use of automated decision systems in hiring.  She supports the law and thinks that it should be used to weed out bad actors who produce and sell tools that don’t work.

Andrew Bell presented work on the Accuracy-Explainability trade-off at ACM FAccT in South Korea, in June!

Lucius Bynum introduced the Causal Inference Playground at VISxAI, co-located with IEEE VIS

Falaah Arif Khan discussed the connections between Equality of Opportunity doctrines from political philosophy and notions of algorithmic fairness at EAAMO in Washington, DC, in October. 

Julia attended Maker Faire Rome in October, and spoke about making Responsible AI synonymous with AI at the Opening Conference, in a talk titled “IA responsabile: verso l’innovazione socialmente sostenibile”. [Twitter]([Twitter](https://twitter.com/stoyanoj/status/1575292964083056640))
[LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:6981060075687665664/)

## What we’re looking forward to:
[**UN Institute for Disarmament Research (UNIDIR):**](https://unidir.org/events/2022-innovations-dialogue-ai-disruption-peace-and-security) Register to attend the UNIDIR Innovations Dialogue on AI Disruption, Peace, and Security, in person in New York City or online. Julia will speak in the opening panel, discussing the state of play and the future of AI. 
[Twitter](https://twitter.com/UNIDIR/status/1564238047096487936) 
[LinkedIn](https://www.linkedin.com/posts/unidir_ai-id22-activity-6986334810428297216-kbj5)


When: October 20, 2022

Where: [Ford Foundation Center for Social Justice](https://www.fordfoundation.org/about/the-ford-foundation-center-for-social-justice/), 320 E 43rd St, New York, NY  and online 

RSVP: [at this link](https://forms.office.com/r/3wZNbSCi2N)