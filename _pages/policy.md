---
layout: page
permalink: /policy/
title: 
description:
nav: false
nav_order: 4
---

<div id="banner-other" style="background-image: url('{{ "/assets/img/banner/Policy.png" | relative_url }}');"></div>

<!-- <h3 class="category" id="policy">Policy</h3> -->

Our commitment to responsible AI extends beyond academic research and
into the policy landscape. Meaningful change comes from a robust
dialogue among researchers, policymakers, community members, and
non-profit organizations. Through governmental outreach, we strive to
influence AI policies that prioritize fairness, transparency, and the
betterment of society. We see ourselves as the bridge that connects
the world of AI research with the realms of public policy and
community engagement.

<h4 class="category" id="governance">AI governance</h4>

<!-- ADS Task force, compotroller report -->

<!-- <h5><b>Read more about our work</b></h5> -->

<div class="publications"> 
{% bibliography -f reports -q @*[keywords ^= *governance]%}
</div>

<h5><b>Recent press coverage</b></h5>

<div class="container">
  <div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
    <a href="https://www.vox.com/future-perfect/23387228/ai-bill-of-rights-white-house-artificial-intelligence-bias">
    {% include figure.html path="assets/img/policy/vox_oct_2022.png" class="img-fluid rounded z-depth-1" %}
    </a>
    </div>
    <div class="col-sm mt-3 mt-md-0">
    <a href="https://www.wsj.com/articles/hiring-job-candidates-ai-11632244313">
    {% include figure.html path="assets/img/policy/wsj_sept_2021.png" class="img-fluid rounded z-depth-1" %}
    </a>
    </div>
  </div>
</div>

<h4 class="category" id="hiring">Algorithmic hiring</h4>

<!-- <h5><b>Read more about our work</b></h5> -->

<div class="publications"> 
{% bibliography -f reports -q @*[keywords ^= *hiring]%}
</div>

<!--<h5><b>Recent press coverage</b></h5>-->

<!-- <h4 class="category" id="laws">Responsible AI for peace and security</h4>-->

<!-- ACM Code of Ethics, IEEE report -->







