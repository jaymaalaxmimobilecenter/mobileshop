<!DOCTYPE html>
<!-- saved from url=(0080)https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5#file-scripts-js -->
<html lang="en" data-color-mode="auto" data-light-theme="light" data-dark-theme="dark" data-a11y-animated-images="system"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><style type="text/css">.turbo-progress-bar {
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  height: 3px;
  background: #0076ff;
  z-index: 2147483647;
  transition:
    width 300ms ease-out,
    opacity 150ms 150ms ease-in;
  transform: translate3d(0, 0, 0);
}
</style>
    
  <link rel="dns-prefetch" href="https://github.githubassets.com/">
  <link rel="dns-prefetch" href="https://avatars.githubusercontent.com/">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com/">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">
  <link rel="preconnect" href="https://github.githubassets.com/" crossorigin="">
  <link rel="preconnect" href="https://avatars.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-ksfTgQOOnE+FFXf+yNfVjKSlEckJAdufFIYGK7ZjRhWcZgzAGcmZqqArTgMLpu90FwthqcCX4ldDgKXbmVMeuQ==" rel="stylesheet" href="./scripts_files/light-92c7d381038e.css"><link crossorigin="anonymous" media="all" integrity="sha512-1KkMNn8M/al/dtzBLupRwkIOgnA9MWkm8oxS+solP87jByEvY/g4BmoxLihRogKcX1obPnf4Yp7dI0ZTWO+ljg==" rel="stylesheet" href="./scripts_files/dark-d4a90c367f0c.css"><link data-color-theme="dark_dimmed" crossorigin="anonymous" media="all" integrity="sha512-cZa7DZqvMBwD236uzEunO/G1dvw8/QftyT2UtLWKQFEy0z0eq0R5WPwqVME+3NSZG1YaLJAaIqtU+m0zWf/6SQ==" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_dimmed-7196bb0d9aaf.css"><link data-color-theme="dark_high_contrast" crossorigin="anonymous" media="all" integrity="sha512-WVoKqJ4y1nLsdNH4RkRT5qrM9+n9RFe1RHSiTnQkBf5TSZkJEc9GpLpTIS7T15EQaUQBJ8BwmKvwFPVqfpTEIQ==" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_high_contrast-595a0aa89e32.css"><link data-color-theme="dark_colorblind" crossorigin="anonymous" media="all" integrity="sha512-XpAMBMSRZ6RTXgepS8LjKiOeNK3BilRbv8qEiA/M3m+Q4GoqxtHedOI5BAZRikCzfBL4KWYvVzYZSZ8Gp/UnUg==" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_colorblind-5e900c04c491.css"><link data-color-theme="light_colorblind" crossorigin="anonymous" media="all" integrity="sha512-3HF2HZ4LgEIQm77yOzoeR20CX1n2cUQlcywscqF4s+5iplolajiHV7E5ranBwkX65jN9TNciHEVSYebQ+8xxEw==" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_colorblind-dc71761d9e0b.css"><link data-color-theme="light_high_contrast" crossorigin="anonymous" media="all" integrity="sha512-+J8j3T0kbK9/sL3zbkCfPtgYcRD4qQfRbT6xnfOrOTjvz4zhr0M7AXPuE642PpaxGhHs1t77cTtieW9hI2K6Gw==" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_high_contrast-f89f23dd3d24.css"><link data-color-theme="light_tritanopia" crossorigin="anonymous" media="all" integrity="sha512-AQeAx5wHQAXNf0DmkvVlHYwA3f6BkxunWTI0GGaRN57GqD+H9tW8RKIKlopLS0qGaC54seFsPc601GDlqIuuHg==" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_tritanopia-010780c79c07.css"><link data-color-theme="dark_tritanopia" crossorigin="anonymous" media="all" integrity="sha512-+u5pmgAE0T03d/yI6Ha0NWwz6Pk0W6S6WEfIt8veDVdK8NTjcMbZmQB9XUCkDlrBoAKkABva8HuGJ+SzEpV1Uw==" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_tritanopia-faee699a0004.css">
  
    <link crossorigin="anonymous" media="all" integrity="sha512-Zl0JBY0YhK6Oj7VqevEvUpzx9Ul3Sr09pIuarzaSkw5sV5vON40vgM9iwBvOKhZSnFmFb+9i9ie+IremL2qc7w==" rel="stylesheet" href="./scripts_files/primer-665d09058d18.css">
    <link crossorigin="anonymous" media="all" integrity="sha512-70eqNxCylN5NZBpkXmCAACYDfcIjsmZkHUeuW4G7eN6l83VpD4aceELPIHPbqR0el7doWT/ffKKwnqWlJ56tmw==" rel="stylesheet" href="./scripts_files/global-ef47aa3710b2.css">
    <link crossorigin="anonymous" media="all" integrity="sha512-/uFXblvSX+c7XWJtxcsRArU0ijMp908BQQfQhqxtdWEgDaoARBewXfmkigufl0c4eY6j6vcra6qgoup4Ad9RNg==" rel="stylesheet" href="./scripts_files/github-fee1576e5bd2.css">
  



  <script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-vbn8xBNgs2GKGFAGP+T/OjeI85hn7s1B+8GYeqYX1v40276p+IokO1DU+9wrNDk4ygwMqYBMbcBbPpl6+i7OLA==" src="./scripts_files/runtime-bdb9fcc41360.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-ZTbn+sr25xFwrZOStm85eDk68/lijDt9/y+CTAU4aQFp8uLFWRcTaRJ/baafzT7KjfYffJmGoAzSzxIcDLFnUA==" src="./scripts_files/vendors-node_modules_manuelpuyol_turbo_dist_turbo_es2017-esm_js-6536e7facaf6.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-C/i5ePqFPmIDtXzu89SC+gootD5m5WbIv7Dc5DfDctwyq0Z4JMTw3/fDjC3zEh3yT4hzCDTdnrVTdsWIm85hYA==" src="./scripts_files/vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183-0bf8b978fa85.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-bflErfRTU+mM6GITg4JpDSjbEtCZy9fLjZM9YmOFdNlkX6zRwnd343PUoYCosr5/pRnwBjPegM4tqTxUM4TCZg==" src="./scripts_files/environment-6df944adf453.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-xigrvjySI1YRktJT463ayw7nEkpyrKhUB2Ykz9Ol+0jgMf9U0D05QznY+SHClkq1Qno/lEaEogoqgxrE8YWxIg==" src="./scripts_files/vendors-node_modules_selector-observer_dist_index_esm_js-c6282bbe3c92.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-dM41iRQ6UnYpR76C4HgAkHjucNGjvYIYdaiHRHJjnUho6/BQSDwR0y3+Bn3I+8Tzf9um6aZvv8Okz6+Rc1s+fA==" src="./scripts_files/vendors-node_modules_delegated-events_dist_index_js-node_modules_github_details-dialog-elemen-63debe-74ce3589143a.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-9pW7JhRe9IQVydCTHOpvwGjSb/Jv0VMgw4ywixLfvcRyWAluZ6YNxeaFwrRJFwzpVjl4U5k39qD2Tp0AQI5aSQ==" src="./scripts_files/vendors-node_modules_fzy_js_index_js-node_modules_github_catalyst_lib_index_js-f695bb26145e.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-OPW0eYJnfr/CCZWLfMgMkyxXEusD3kDJScVUdRux0+7KYf8K8VszVyPA1G+EgVoQ3blaZZ3+EZexd/jr5AdibQ==" src="./scripts_files/vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-73b750-38f5b4798267.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-8r8MRFPdPm6/fQi/0vunbUg3ivkWwbehhLhJCD/qdcCz30GDYMaGg9p97qyCEiVL0uM1UVOqNJgmSZ4jqXfneA==" src="./scripts_files/vendors-node_modules_github_time-elements_dist_index_js-f2bf0c4453dd.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-0WsQ2vrE54CLPIG0e8JPikY6twbI76udEwpvn0QxFYKBZ8nNxhAZm/4XuFy7IwZ4vJGYC6qFWhR1+3KRQPpgLA==" src="./scripts_files/vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_primer_view-co-54af05-d16b10dafac4.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-VP9EGoy+HDZpdl6AmeFeqvnZQ/IGp1LlKjXr4T2EWa5Hbj6jXjC4hYe5ulssN6Z77iW6oXhwauuNfJdIia0qfA==" src="./scripts_files/github-elements-54ff441a8cbe.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-HqjjlypEGKA5bnESTEmZ+Za6kAKkp17dLQhs/djwFWldsr5MgCNpiwX3I2hJnuPeez71QrmgUyLfuBAN6f5K5A==" src="./scripts_files/element-registry-1ea8e3972a44.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-kLhIYVjAXJ2hXeyCEm3URfd7vkVJppjyVHGZgh7ihO1SxQOEsjxaeb+fHdHG55Z6M/RcS/DhAkiBLsTcOQ7gLg==" src="./scripts_files/vendors-node_modules_lit-html_lit-html_js-90b8486158c0.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-3SyoVPgIZ3COEg8FBG3Me5pypRq/PHsQlsoYTPrm9h7MZhS4bTOiKxL61LqwFDm375GRaFW2g3GUXQN5F4pxgA==" src="./scripts_files/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_hotkey_dist_index-9f48bd-dd2ca854f808.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-ttmm0QLZY8fxY74dwIpI2/d/17eYOzsD2Gl6aUZZ7u+k5t7PrcyXbnfH2US9smnB6ygJUY26BP6OLP4GAP0FDg==" src="./scripts_files/vendors-node_modules_github_remote-form_dist_index_js-node_modules_scroll-anchoring_dist_scro-5881a7-b6d9a6d102d9.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-QRpxs/h4rosCrPVNsJqngkNuY4kG63lXQhzzp+Qswtm8UzwFToJxDtxINMICWPHLxVJCAXi+gaGBy0rt84gKNQ==" src="./scripts_files/vendors-node_modules_github_paste-markdown_dist_index_esm_js-node_modules_github_quote-select-b114cf-411a71b3f878.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-BysfurlZLa+kGOWYPyCk2MRkf0EAYydE6gAreHRtFt7OLvH4CA+GiVPItEIcswESp++Hdlx4zq6lyEg44Xlmzg==" src="./scripts_files/app_assets_modules_github_soft-nav_navigate_ts-072b1fbab959.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-+NIA1YfKweEgg48fHVRhI4MDRwQFcXnCgXLPP7oxQzpzQsgsQ2dpCXIMnlsipk4oVNf/WhEGNX1IjWOEXkxKKw==" src="./scripts_files/app_assets_modules_github_behaviors_keyboard-shortcuts-helper_ts-app_assets_modules_github_di-9b8a64-f8d200d587ca.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-Y6P6iEyMBROE+M9c4vHdqemcFJ1CVrqMRVbiq3OGaEJ6WAY5hcc1QG47hcKTTejSLMMbRvB90wKrOKntY393Zg==" src="./scripts_files/app_assets_modules_github_behaviors_task-list_ts-app_assets_modules_github_has-interactions_t-0091d6-63a3fa884c8c.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-elEAjlOaE3+ADn59gSrSDm/DLJnQWpT5e2nOWJttk7KT7BdGB63Kv8WXHTQjjVHUYinyc0EsbhmTxcDOPplDYg==" src="./scripts_files/app_assets_modules_github_behaviors_details_ts-app_assets_modules_github_behaviors_include-fr-a78de3-7a51008e539a.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-zBV3Z9LW/2mTMTRKvz/L900np00McXWlmIKwSdpDdVsIREB0SuyjsidkRxxB3F4CB1XZKSYCmBMFse1XRAaJLA==" src="./scripts_files/behaviors-cc157767d2d6.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-3WKbPWWjtzdX85Bzbcgwipn1M+jRnHd3W8y8uKGo7fxXEXnh0IIKxQ5BnOhy1uHSp2JQuro134aD3M4VEr2feA==" src="./scripts_files/notifications-global-dd629b3d65a3.js.download"></script>
    <script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-kgpS+MXAle9xlo1l7/jg6RhVRu208n8DQsKCL4ASBCLx6YUtldMZtzTHDPWToL6j6LQ0OW0sa+9Q9OBuJTQ/HA==" src="./scripts_files/vendors-node_modules_github_clipboard-copy-element_dist_index_esm_js-node_modules_github_remo-8e6bec-920a52f8c5c0.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-CP8h5+t/ZBXmGY0y+MRRn1e0wW7w+Pvx3aNkkt2N6taXWkhfQPXpbhw+i985dZurw+N+5fuyOwBmTyMGDsqkPg==" src="./scripts_files/vendors-node_modules_delegated-events_dist_index_js-node_modules_github_template-parts_lib_in-2b5acf1-08ff21e7eb7f.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-LO7L/S9Cv4EuzHNZlaQ4s2xtIfbmAc/MhBM4czs2gUcotc6CvJfJz1kv0KrQWuED3kbRsaJAtdZ1wgYLJbM1EQ==" src="./scripts_files/app_assets_modules_github_diffs_blob-lines_ts-app_assets_modules_github_diffs_linkable-line-n-f314c3-2ceecbfd2f42.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" integrity="sha512-cc76fpJArAriCPRk5tPB6L23agk5gHYVTOZuK4I03DWfbI+ZF6nJ7Iw5e5y2ft0nK/ZnV7tsAottItglomdmOw==" src="./scripts_files/gist-71cefa7e9240.js.download"></script>


  <title>scripts.js ?? GitHub</title>



    

  <meta name="request-id" content="FA5E:5E97:EAF67D:112F2DF:62DCDF69" data-pjax-transient="true"><meta name="html-safe-nonce" content="7a66f664f21d46c77cea52c370c1af370f68e693b4734309f6a11969c988b10d" data-pjax-transient="true"><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vIiwicmVxdWVzdF9pZCI6IkZBNUU6NUU5NzpFQUY2N0Q6MTEyRjJERjo2MkRDREY2OSIsInZpc2l0b3JfaWQiOiI2NjgyODc3NzY0NTc0MDk3NjQ4IiwicmVnaW9uX2VkZ2UiOiJhcC1zb3V0aC0xIiwicmVnaW9uX3JlbmRlciI6ImFwLXNvdXRoLTEifQ==" data-pjax-transient="true"><meta name="visitor-hmac" content="1697519ef20987a8d0b1cae8379d7d43b1377f720dac67612461c61623a78288" data-pjax-transient="true">



  <meta name="github-keyboard-shortcuts" content="" data-pjax-transient="true">
  

  <meta name="selected-link" value="gist_code" data-pjax-transient="">

    <meta name="google-site-verification" content="c1kuD-K2HIVF635lypcsWPoD4kilo5-jA_wBFyT4uMY">
  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

<meta name="octolytics-url" content="https://collector.github.com/github/collect">

  <meta name="analytics-location" content="/&lt;user-name&gt;/&lt;gist-id&gt;" data-pjax-transient="true">

  




    <meta name="octolytics-dimension-public" content="true"><meta name="octolytics-dimension-gist_id" content="77272322"><meta name="octolytics-dimension-gist_name" content="12712ecf5d3870206ba72592b37044a5"><meta name="octolytics-dimension-anonymous" content="false"><meta name="octolytics-dimension-owner_id" content="1235741"><meta name="octolytics-dimension-owner_login" content="miniMAC"><meta name="octolytics-dimension-forked" content="false">


    <meta name="user-login" content="">

    <meta name="viewport" content="width=device-width">
    
      <meta name="description" content="GitHub Gist: instantly share code, notes, and snippets.">
      <link rel="search" type="application/opensearchdescription+xml" href="https://gist.github.com/opensearch-gist.xml" title="Gist">
    <link rel="fluid-icon" href="https://gist.github.com/fluidicon.png" title="GitHub">
    <meta property="fb:app_id" content="1401488693436528">
    <meta name="apple-itunes-app" content="app-id=1477376905">
      <meta name="twitter:image:src" content="https://github.githubassets.com/images/modules/gists/gist-og-image.png"><meta name="twitter:site" content="@github"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="scripts.js"><meta name="twitter:description" content="GitHub Gist: instantly share code, notes, and snippets.">
      <meta property="og:image" content="https://github.githubassets.com/images/modules/gists/gist-og-image.png"><meta property="og:image:alt" content="GitHub Gist: instantly share code, notes, and snippets."><meta property="og:site_name" content="Gist"><meta property="og:type" content="article"><meta property="og:title" content="scripts.js"><meta property="og:url" content="https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5"><meta property="og:description" content="GitHub Gist: instantly share code, notes, and snippets."><meta property="article:author" content="262588213843476"><meta property="article:publisher" content="262588213843476">
      
    <link rel="assets" href="https://github.githubassets.com/">
    


        <meta name="hostname" content="gist.github.com">



        <meta name="expected-hostname" content="gist.github.com">

    <meta name="enabled-features" content="IMAGE_METRIC_TRACKING,GEOJSON_AZURE_MAPS">


  <meta http-equiv="x-pjax-version" content="22d995fa726619727f6b2d032b2febc713b80d43b5d3667f2721b7f63f670ac0" data-turbo-track="reload">
  <meta http-equiv="x-pjax-csp-version" content="485d6a5ccbb1eeae9c86b616b4870b531f6f458e8bd5c309c40280dc4f51defb" data-turbo-track="reload">
  <meta http-equiv="x-pjax-css-version" content="f0e7d7bccc8c1b3aebce2b52c98c94ee031c8144bcb64ade76ad7dcb39d029bb" data-turbo-track="reload">
  <meta http-equiv="x-pjax-js-version" content="c6d91a0a1ee002dd8825f9109b23e7d083c7a0d0eae40ad3785b65d8d77aa9d3" data-turbo-track="reload">

  <meta name="turbo-cache-control" content="no-preview" data-pjax-transient="">

      <link href="https://gist.github.com/miniMAC.atom" rel="alternate" title="atom" type="application/atom+xml">


  <link crossorigin="anonymous" media="all" integrity="sha512-sh2yjS+AxvEdrKln9ht0mBnnVTVeQKatYC0mwWIVYyP/6rzOH6qLj5XypFJ+dAFa2BOCYc0Yhpq9iw4KtVFR0g==" rel="stylesheet" href="./scripts_files/gist-b21db28d2f80.css">



  <meta name="turbo-body-classes" content="logged-out env-production page-responsive">


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <meta name="browser-optimizely-client-errors-url" content="https://api.github.com/_private/browser/optimizely_client/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://github.githubassets.com/favicons/favicon-dark.png">
  <link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon-dark.svg">

<meta name="theme-color" content="#1e2327">
<meta name="color-scheme" content="light dark">



  </head>

  <body class="logged-out env-production page-responsive intent-mouse" style="word-wrap: break-word;">
    

    <div class="position-relative js-header-wrapper ">
      <a href="https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5#start-of-content" class="px-2 py-4 color-bg-accent-emphasis color-fg-on-emphasis show-on-focus js-skip-to-content">Skip to content</a>
      <span data-view-component="true" class="progress-pjax-loader js-pjax-loader-bar Progress position-fixed width-full">
    <span style="width: 0%;" data-view-component="true" class="Progress-item progress-pjax-loader-bar left-0 top-0 color-bg-accent-emphasis"></span>
</span>      
      


          <div class="Header js-details-container Details flex-wrap flex-md-nowrap p-responsive" role="banner">
  <div class="Header-item d-none d-md-flex">
    <a class="Header-link" data-hotkey="g d" aria-label="Gist Homepage " href="https://gist.github.com/">
  <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github v-align-middle d-inline-block d-md-none">
    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
</svg>
  <svg aria-hidden="true" height="24" viewBox="0 0 45 16" version="1.1" width="67" data-view-component="true" class="octicon octicon-logo-github v-align-middle d-none d-md-inline-block">
    <path fill-rule="evenodd" d="M18.53 12.03h-.02c.009 0 .015.01.024.011h.006l-.01-.01zm.004.011c-.093.001-.327.05-.574.05-.78 0-1.05-.36-1.05-.83V8.13h1.59c.09 0 .16-.08.16-.19v-1.7c0-.09-.08-.17-.16-.17h-1.59V3.96c0-.08-.05-.13-.14-.13h-2.16c-.09 0-.14.05-.14.13v2.17s-1.09.27-1.16.28c-.08.02-.13.09-.13.17v1.36c0 .11.08.19.17.19h1.11v3.28c0 2.44 1.7 2.69 2.86 2.69.53 0 1.17-.17 1.27-.22.06-.02.09-.09.09-.16v-1.5a.177.177 0 00-.146-.18zM42.23 9.84c0-1.81-.73-2.05-1.5-1.97-.6.04-1.08.34-1.08.34v3.52s.49.34 1.22.36c1.03.03 1.36-.34 1.36-2.25zm2.43-.16c0 3.43-1.11 4.41-3.05 4.41-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88zm-8.72-3.61h-2.1c-.11 0-.17.08-.17.19v5.44s-.55.39-1.3.39-.97-.34-.97-1.09V6.25c0-.09-.08-.17-.17-.17h-2.14c-.09 0-.17.08-.17.17v5.11c0 2.2 1.23 2.75 2.92 2.75 1.39 0 2.52-.77 2.52-.77s.05.39.08.45c.02.05.09.09.16.09h1.34c.11 0 .17-.08.17-.17l.02-7.47c0-.09-.08-.17-.19-.17zm-23.7-.01h-2.13c-.09 0-.17.09-.17.2v7.34c0 .2.13.27.3.27h1.92c.2 0 .25-.09.25-.27V6.23c0-.09-.08-.17-.17-.17zm-1.05-3.38c-.77 0-1.38.61-1.38 1.38 0 .77.61 1.38 1.38 1.38.75 0 1.36-.61 1.36-1.38 0-.77-.61-1.38-1.36-1.38zm16.49-.25h-2.11c-.09 0-.17.08-.17.17v4.09h-3.31V2.6c0-.09-.08-.17-.17-.17h-2.13c-.09 0-.17.08-.17.17v11.11c0 .09.09.17.17.17h2.13c.09 0 .17-.08.17-.17V8.96h3.31l-.02 4.75c0 .09.08.17.17.17h2.13c.09 0 .17-.08.17-.17V2.6c0-.09-.08-.17-.17-.17zM8.81 7.35v5.74c0 .04-.01.11-.06.13 0 0-1.25.89-3.31.89-2.49 0-5.44-.78-5.44-5.92S2.58 1.99 5.1 2c2.18 0 3.06.49 3.2.58.04.05.06.09.06.14L7.94 4.5c0 .09-.09.2-.2.17-.36-.11-.9-.33-2.17-.33-1.47 0-3.05.42-3.05 3.73s1.5 3.7 2.58 3.7c.92 0 1.25-.11 1.25-.11v-2.3H4.88c-.11 0-.19-.08-.19-.17V7.35c0-.09.08-.17.19-.17h3.74c.11 0 .19.08.19.17z"></path>
</svg>
  <svg aria-hidden="true" height="24" viewBox="0 0 25 16" version="1.1" width="37" data-view-component="true" class="octicon octicon-logo-gist v-align-middle d-none d-md-inline-block">
    <path fill-rule="evenodd" d="M4.7 8.73h2.45v4.02c-.55.27-1.64.34-2.53.34-2.56 0-3.47-2.2-3.47-5.05 0-2.85.91-5.06 3.48-5.06 1.28 0 2.06.23 3.28.73V2.66C7.27 2.33 6.25 2 4.63 2 1.13 2 0 4.69 0 8.03c0 3.34 1.11 6.03 4.63 6.03 1.64 0 2.81-.27 3.59-.64V7.73H4.7v1zm6.39 3.72V6.06h-1.05v6.28c0 1.25.58 1.72 1.72 1.72v-.89c-.48 0-.67-.16-.67-.7v-.02zm.25-8.72c0-.44-.33-.78-.78-.78s-.77.34-.77.78.33.78.77.78.78-.34.78-.78zm4.34 5.69c-1.5-.13-1.78-.48-1.78-1.17 0-.77.33-1.34 1.88-1.34 1.05 0 1.66.16 2.27.36v-.94c-.69-.3-1.52-.39-2.25-.39-2.2 0-2.92 1.2-2.92 2.31 0 1.08.47 1.88 2.73 2.08 1.55.13 1.77.63 1.77 1.34 0 .73-.44 1.42-2.06 1.42-1.11 0-1.86-.19-2.33-.36v.94c.5.2 1.58.39 2.33.39 2.38 0 3.14-1.2 3.14-2.41 0-1.28-.53-2.03-2.75-2.23h-.03zm8.58-2.47v-.86h-2.42v-2.5l-1.08.31v2.11l-1.56.44v.48h1.56v5c0 1.53 1.19 2.13 2.5 2.13.19 0 .52-.02.69-.05v-.89c-.19.03-.41.03-.61.03-.97 0-1.5-.39-1.5-1.34V6.94h2.42v.02-.01z"></path>
</svg>
</a>
  </div>

  <div class="Header-item d-md-none">
    <button aria-label="Toggle navigation" aria-expanded="false" type="button" data-view-component="true" class="Header-link js-details-target btn-link">  <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-three-bars">
    <path fill-rule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path>
</svg>
  
</button>  </div>

  <div class="Header-item Header-item--full js-site-search flex-column flex-md-row width-full flex-order-2 flex-md-order-none mr-0 mr-md-3 mt-3 mt-md-0 Details-content--hidden-not-important d-md-flex">
      <div class="header-search flex-self-stretch flex-md-self-auto mr-0 mr-md-3 mb-3 mb-md-0">
  <!-- '"` --><!-- </textarea></xmp> --><form class="position-relative js-quicksearch-form" role="search" aria-label="Site" data-turbo="false" action="https://gist.github.com/search" accept-charset="UTF-8" method="get">
    <div class="header-search-wrapper form-control input-sm js-chromeless-input-container">
      <input type="text" class="form-control input-sm js-site-search-focus header-search-input" data-hotkey="s,/" name="q" aria-label="Search" placeholder="Search???" autocorrect="off" autocomplete="off" autocapitalize="off">
    </div>

</form></div>


    <nav aria-label="Global" class="d-flex flex-column flex-md-row flex-self-stretch flex-md-self-auto">
  <a class="Header-link mr-0 mr-md-3 py-2 py-md-0 border-top border-md-top-0 border-white-fade" data-ga-click="Header, go to all gists, text:all gists" href="https://gist.github.com/discover">All gists</a>

  <a class="Header-link mr-0 mr-md-3 py-2 py-md-0 border-top border-md-top-0 border-white-fade" data-ga-click="Header, go to GitHub, text:Back to GitHub" href="https://github.com/">Back to GitHub</a>

    <a class="Header-link d-block d-md-none mr-0 mr-md-3 py-2 py-md-0 border-top border-md-top-0 border-white-fade" data-ga-click="Header, sign in" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;gist header&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="311ed35ab1d45dadcc1b3285451baedd96d65e9b682edb8785e1cd1b81ace0f4" href="https://gist.github.com/auth/github?return_to=https%3A%2F%2Fgist.github.com%2FminiMAC%2F12712ecf5d3870206ba72592b37044a5">
      Sign in
</a>
      <a class="Header-link d-block d-md-none mr-0 mr-md-3 py-2 py-md-0 border-top border-md-top-0 border-white-fade" data-ga-click="Header, sign up" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;gist header&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="5b9c881d77acedef8d2525c6b5ff142120747f25462e95710ac791ebe55832dd" href="https://gist.github.com/join?return_to=https%3A%2F%2Fgist.github.com%2FminiMAC%2F12712ecf5d3870206ba72592b37044a5&amp;source=header-gist">
        Sign up
</a></nav>

  </div>

  <div class="Header-item Header-item--full flex-justify-center d-md-none position-relative">
    <a class="Header-link" data-hotkey="g d" aria-label="Gist Homepage " href="https://gist.github.com/">
  <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github v-align-middle d-inline-block d-md-none">
    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
</svg>
  <svg aria-hidden="true" height="24" viewBox="0 0 45 16" version="1.1" width="67" data-view-component="true" class="octicon octicon-logo-github v-align-middle d-none d-md-inline-block">
    <path fill-rule="evenodd" d="M18.53 12.03h-.02c.009 0 .015.01.024.011h.006l-.01-.01zm.004.011c-.093.001-.327.05-.574.05-.78 0-1.05-.36-1.05-.83V8.13h1.59c.09 0 .16-.08.16-.19v-1.7c0-.09-.08-.17-.16-.17h-1.59V3.96c0-.08-.05-.13-.14-.13h-2.16c-.09 0-.14.05-.14.13v2.17s-1.09.27-1.16.28c-.08.02-.13.09-.13.17v1.36c0 .11.08.19.17.19h1.11v3.28c0 2.44 1.7 2.69 2.86 2.69.53 0 1.17-.17 1.27-.22.06-.02.09-.09.09-.16v-1.5a.177.177 0 00-.146-.18zM42.23 9.84c0-1.81-.73-2.05-1.5-1.97-.6.04-1.08.34-1.08.34v3.52s.49.34 1.22.36c1.03.03 1.36-.34 1.36-2.25zm2.43-.16c0 3.43-1.11 4.41-3.05 4.41-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88zm-8.72-3.61h-2.1c-.11 0-.17.08-.17.19v5.44s-.55.39-1.3.39-.97-.34-.97-1.09V6.25c0-.09-.08-.17-.17-.17h-2.14c-.09 0-.17.08-.17.17v5.11c0 2.2 1.23 2.75 2.92 2.75 1.39 0 2.52-.77 2.52-.77s.05.39.08.45c.02.05.09.09.16.09h1.34c.11 0 .17-.08.17-.17l.02-7.47c0-.09-.08-.17-.19-.17zm-23.7-.01h-2.13c-.09 0-.17.09-.17.2v7.34c0 .2.13.27.3.27h1.92c.2 0 .25-.09.25-.27V6.23c0-.09-.08-.17-.17-.17zm-1.05-3.38c-.77 0-1.38.61-1.38 1.38 0 .77.61 1.38 1.38 1.38.75 0 1.36-.61 1.36-1.38 0-.77-.61-1.38-1.36-1.38zm16.49-.25h-2.11c-.09 0-.17.08-.17.17v4.09h-3.31V2.6c0-.09-.08-.17-.17-.17h-2.13c-.09 0-.17.08-.17.17v11.11c0 .09.09.17.17.17h2.13c.09 0 .17-.08.17-.17V8.96h3.31l-.02 4.75c0 .09.08.17.17.17h2.13c.09 0 .17-.08.17-.17V2.6c0-.09-.08-.17-.17-.17zM8.81 7.35v5.74c0 .04-.01.11-.06.13 0 0-1.25.89-3.31.89-2.49 0-5.44-.78-5.44-5.92S2.58 1.99 5.1 2c2.18 0 3.06.49 3.2.58.04.05.06.09.06.14L7.94 4.5c0 .09-.09.2-.2.17-.36-.11-.9-.33-2.17-.33-1.47 0-3.05.42-3.05 3.73s1.5 3.7 2.58 3.7c.92 0 1.25-.11 1.25-.11v-2.3H4.88c-.11 0-.19-.08-.19-.17V7.35c0-.09.08-.17.19-.17h3.74c.11 0 .19.08.19.17z"></path>
</svg>
  <svg aria-hidden="true" height="24" viewBox="0 0 25 16" version="1.1" width="37" data-view-component="true" class="octicon octicon-logo-gist v-align-middle d-none d-md-inline-block">
    <path fill-rule="evenodd" d="M4.7 8.73h2.45v4.02c-.55.27-1.64.34-2.53.34-2.56 0-3.47-2.2-3.47-5.05 0-2.85.91-5.06 3.48-5.06 1.28 0 2.06.23 3.28.73V2.66C7.27 2.33 6.25 2 4.63 2 1.13 2 0 4.69 0 8.03c0 3.34 1.11 6.03 4.63 6.03 1.64 0 2.81-.27 3.59-.64V7.73H4.7v1zm6.39 3.72V6.06h-1.05v6.28c0 1.25.58 1.72 1.72 1.72v-.89c-.48 0-.67-.16-.67-.7v-.02zm.25-8.72c0-.44-.33-.78-.78-.78s-.77.34-.77.78.33.78.77.78.78-.34.78-.78zm4.34 5.69c-1.5-.13-1.78-.48-1.78-1.17 0-.77.33-1.34 1.88-1.34 1.05 0 1.66.16 2.27.36v-.94c-.69-.3-1.52-.39-2.25-.39-2.2 0-2.92 1.2-2.92 2.31 0 1.08.47 1.88 2.73 2.08 1.55.13 1.77.63 1.77 1.34 0 .73-.44 1.42-2.06 1.42-1.11 0-1.86-.19-2.33-.36v.94c.5.2 1.58.39 2.33.39 2.38 0 3.14-1.2 3.14-2.41 0-1.28-.53-2.03-2.75-2.23h-.03zm8.58-2.47v-.86h-2.42v-2.5l-1.08.31v2.11l-1.56.44v.48h1.56v5c0 1.53 1.19 2.13 2.5 2.13.19 0 .52-.02.69-.05v-.89c-.19.03-.41.03-.61.03-.97 0-1.5-.39-1.5-1.34V6.94h2.42v.02-.01z"></path>
</svg>
</a>
  </div>

    <div class="Header-item f4 mr-0" role="navigation">
      <a class="HeaderMenu-link no-underline mr-3" data-ga-click="Header, sign in" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;gist header&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="311ed35ab1d45dadcc1b3285451baedd96d65e9b682edb8785e1cd1b81ace0f4" href="https://gist.github.com/auth/github?return_to=https%3A%2F%2Fgist.github.com%2FminiMAC%2F12712ecf5d3870206ba72592b37044a5">
        Sign&nbsp;in
</a>        <a class="HeaderMenu-link d-inline-block no-underline border color-border-default rounded px-2 py-1" data-ga-click="Header, sign up" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;gist header&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="5b9c881d77acedef8d2525c6b5ff142120747f25462e95710ac791ebe55832dd" href="https://gist.github.com/join?return_to=https%3A%2F%2Fgist.github.com%2FminiMAC%2F12712ecf5d3870206ba72592b37044a5&amp;source=header-gist">
          Sign&nbsp;up
</a>    </div>
</div>



    </div>

  <div id="start-of-content" class="show-on-focus"></div>







    <div data-pjax-replace="" id="js-flash-container" data-turbo-replace="">



  <template class="js-flash-template"></template>
</div>


    
  <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>





  <div class="application-main " data-commit-hovercards-enabled="" data-discussion-hovercards-enabled="" data-issue-and-pr-hovercards-enabled="">
        <div itemscope="" itemtype="http://schema.org/Code">
    <main id="gist-pjax-container" data-pjax-container="">
      


  <div class="gist-detail-intro gist-banner pb-3">
    <div class="text-center container-lg px-3">
      <p class="lead">
        Instantly share code, notes, and snippets.
      </p>
    </div>
  </div>


<div class="gisthead pagehead pb-0 pt-3 mb-4">
  <div class="px-0">
    
  

<div class="mb-3 d-flex px-3 px-md-3 px-lg-5">
  <div class="flex-auto min-width-0 width-fit mr-3">
    <div class="d-flex">
      <div class="d-none d-md-block">
        <a class="mr-2 flex-shrink-0" data-hovercard-type="user" data-hovercard-url="/users/miniMAC/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://gist.github.com/miniMAC"><img class="avatar avatar-user" src="./scripts_files/1235741" width="32" height="32" alt="@miniMAC"></a>
      </div>
      <div class="d-flex flex-column width-full">
          <div class="d-flex flex-row width-full">
            <h1 class="wb-break-word f3 text-normal mb-md-0 mb-1">
              <span class="author"><a data-hovercard-type="user" data-hovercard-url="/users/miniMAC/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://gist.github.com/miniMAC">miniMAC</a></span><!--
                  --><span class="mx-1 color-fg-muted">/</span><!--
                  --><strong itemprop="name" class="css-truncate-target mr-1" style="max-width: 410px"><a href="https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5">scripts.js</a></strong>
            </h1>

        </div>

        <div class="note m-0">
          Last active <time-ago datetime="2021-09-16T22:24:16Z" data-view-component="true" class="no-wrap" title="Sep 17, 2021, 3:54 AM GMT+5:30">10 months ago</time-ago>
        </div>
      </div>
    </div>
  </div>

  <ul class="d-md-flex d-none pagehead-actions float-none">



      <li>
          <a class="btn btn-sm btn-with-count tooltipped tooltipped-n" aria-label="You must be signed in to star a gist" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;gist star button&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="4cfc81a0995ce5b1a5a8df2fbcefb5832e33912384156f0237ee056d2ac01b8d" href="https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2FminiMAC%2F12712ecf5d3870206ba72592b37044a5">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
</svg>
    Star
</a>
    <a class="social-count" aria-label="2 users starred this gist" href="https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5/stargazers">
      2
</a>
      </li>

        <li>
            <a class="btn btn-sm btn-with-count tooltipped tooltipped-n" aria-label="You must be signed in to fork a gist" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;gist fork button&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="1f858052ae8a9cd864814dc1d6ab0eb88212d539c88dd049f68eb91c33df6937" href="https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2FminiMAC%2F12712ecf5d3870206ba72592b37044a5">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
    <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
</svg>
    Fork
</a>    <a class="social-count js-social-count" href="https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5/forks" aria-label="2 users forked this gist">
      2
    </a>

        </li>
  </ul>
</div>

  <div class="d-block d-md-none px-3 px-md-3 px-lg-5 mb-3">
      <a class="btn btn-sm btn-block tooltipped tooltipped-n" aria-label="You must be signed in to star a gist" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;gist star button&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="4cfc81a0995ce5b1a5a8df2fbcefb5832e33912384156f0237ee056d2ac01b8d" href="https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2FminiMAC%2F12712ecf5d3870206ba72592b37044a5">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
</svg>
    Star
</a>

  </div>

<div class="d-flex flex-md-row flex-column px-0 pr-md-3 px-lg-5">
  <div class="flex-md-order-1 flex-order-2 flex-auto">
    <nav class="UnderlineNav box-shadow-none px-3 px-lg-0 " aria-label="Gist" data-pjax="#gist-pjax-container">

  <div class="UnderlineNav-body">
    <a class="js-selected-navigation-item selected UnderlineNav-item" data-pjax="true" data-hotkey="g c" aria-current="page" data-selected-links="gist_code /miniMAC/12712ecf5d3870206ba72592b37044a5" href="https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code UnderlineNav-octicon">
    <path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path>
</svg>
      Code
</a>
      <a class="js-selected-navigation-item UnderlineNav-item" data-pjax="true" data-hotkey="g r" data-selected-links="gist_revisions /miniMAC/12712ecf5d3870206ba72592b37044a5/revisions" href="https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5/revisions">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-commit">
    <path fill-rule="evenodd" d="M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.43.75a4.002 4.002 0 01-7.86 0H.75a.75.75 0 110-1.5h3.32a4.001 4.001 0 017.86 0h3.32a.75.75 0 110 1.5h-3.32z"></path>
</svg>
        Revisions
        <span title="3" data-view-component="true" class="Counter hx_reponav_item_counter">3</span>
</a>
      <a class="js-selected-navigation-item UnderlineNav-item" data-pjax="true" data-hotkey="g s" data-selected-links="gist_stars /miniMAC/12712ecf5d3870206ba72592b37044a5/stargazers" href="https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5/stargazers">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
</svg>
        Stars
        <span title="2" data-view-component="true" class="Counter hx_reponav_item_counter">2</span>
</a>
      <a class="js-selected-navigation-item UnderlineNav-item" data-pjax="true" data-hotkey="g f" data-selected-links="gist_forks /miniMAC/12712ecf5d3870206ba72592b37044a5/forks" href="https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5/forks">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-branch">
    <path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path>
</svg>
        Forks
        <span title="2" data-view-component="true" class="Counter hx_reponav_item_counter">2</span>
</a>  </div>
</nav>

  </div>

  <div class="d-md-flex d-none flex-items-center flex-md-order-2 flex-order-1 file-navigation-options" data-multiple="">

    <div class="d-lg-table d-none">
      <div class="file-navigation-option v-align-middle">

  <div class="d-md-flex d-none">
    <div class="input-group">
      <div class="input-group-button">
        <details class="details-reset details-overlay select-menu">
          <summary data-ga-click="Repository, clone Embed, location:repo overview" data-view-component="true" class="select-menu-button btn-sm btn" aria-haspopup="menu" role="button">  <span data-menu-button="">Embed</span>
  
</summary>          <details-menu class="select-menu-modal position-absolute" data-menu-input="gist-share-url" style="z-index: 99;" aria-label="Clone options" role="menu">
            <div class="select-menu-header">
              <span class="select-menu-title">What would you like to do?</span>
            </div>
            <div class="select-menu-list">
                <button name="button" type="button" class="select-menu-item width-full" aria-checked="true" role="menuitemradio" value="&lt;script src=&quot;https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5.js&quot;&gt;&lt;/script&gt;" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;EMBED&quot;,&quot;git_repository_type&quot;:&quot;GIST&quot;,&quot;gist_id&quot;:77272322,&quot;originating_url&quot;:&quot;https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="ae0fae2b9a684ba1ba0a078cad6a7e3d66db1aed3be97f2d3c821ada0a114264">
                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check select-menu-item-icon">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
                  <div class="select-menu-item-text">
                    <span class="select-menu-item-heading" data-menu-button-text="">
                      
                      Embed
                    </span>
                      <span class="description">
                        Embed this gist in your website.
                      </span>
                  </div>
</button>                <button name="button" type="button" class="select-menu-item width-full" aria-checked="false" role="menuitemradio" value="https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;SHARE&quot;,&quot;git_repository_type&quot;:&quot;GIST&quot;,&quot;gist_id&quot;:77272322,&quot;originating_url&quot;:&quot;https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="c0eea92e27023c8eb29b09328940e7bc93521a9f1d15fbb0c1024e02d6761b6c">
                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check select-menu-item-icon">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
                  <div class="select-menu-item-text">
                    <span class="select-menu-item-heading" data-menu-button-text="">
                      
                      Share
                    </span>
                      <span class="description">
                        Copy sharable link for this gist.
                      </span>
                  </div>
</button>                <button name="button" type="button" class="select-menu-item width-full" aria-checked="false" role="menuitemradio" value="https://gist.github.com/12712ecf5d3870206ba72592b37044a5.git" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;USE_HTTPS&quot;,&quot;git_repository_type&quot;:&quot;GIST&quot;,&quot;gist_id&quot;:77272322,&quot;originating_url&quot;:&quot;https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="6aba7a108de088c1c6ffa0cafd2d9f3ea914e0169cf22728cd923f0e03bd55a6">
                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check select-menu-item-icon">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
                  <div class="select-menu-item-text">
                    <span class="select-menu-item-heading" data-menu-button-text="">
                      Clone via
                      HTTPS
                    </span>
                      <span class="description">
                        Clone with Git or checkout with SVN using the repository???s web address.
                      </span>
                  </div>
</button>            </div>
            <div class="select-menu-list">
              <a role="link" class="select-menu-item select-menu-action" href="https://docs.github.com/articles/which-remote-url-should-i-use" target="_blank">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-question select-menu-item-icon">
    <path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zM6.92 6.085c.081-.16.19-.299.34-.398.145-.097.371-.187.74-.187.28 0 .553.087.738.225A.613.613 0 019 6.25c0 .177-.04.264-.077.318a.956.956 0 01-.277.245c-.076.051-.158.1-.258.161l-.007.004a7.728 7.728 0 00-.313.195 2.416 2.416 0 00-.692.661.75.75 0 001.248.832.956.956 0 01.276-.245 6.3 6.3 0 01.26-.16l.006-.004c.093-.057.204-.123.313-.195.222-.149.487-.355.692-.662.214-.32.329-.702.329-1.15 0-.76-.36-1.348-.863-1.725A2.76 2.76 0 008 4c-.631 0-1.155.16-1.572.438-.413.276-.68.638-.849.977a.75.75 0 101.342.67z"></path>
</svg>
                <div class="select-menu-item-text">
                  Learn more about clone URLs
                </div>
              </a>
            </div>
          </details-menu>
        </details>
      </div>

      <input id="gist-share-url" type="text" data-autoselect="" class="form-control input-monospace input-sm" value="&lt;script src=&quot;https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5.js&quot;&gt;&lt;/script&gt;" aria-label="Clone this repository at &lt;script src=&quot;https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5.js&quot;&gt;&lt;/script&gt;" readonly="">

      <div class="input-group-button">
        <clipboard-copy for="gist-share-url" aria-label="Copy to clipboard" class="btn btn-sm zeroclipboard-button" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;COPY_URL&quot;,&quot;git_repository_type&quot;:&quot;GIST&quot;,&quot;gist_id&quot;:77272322,&quot;originating_url&quot;:&quot;https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="20611587e602764c30cd2d43f9633df1c69f6634ba715c795faa6002bb1a172b" tabindex="0" role="button"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy">
    <path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
</svg></clipboard-copy>
      </div>
    </div>
  </div>
</div>

    </div>

    <div class="ml-2 file-navigation-option">
    <a class="btn btn-sm tooltipped tooltipped-s tooltipped-multiline js-remove-unless-platform" data-platforms="windows,mac" aria-label="Save miniMAC/12712ecf5d3870206ba72592b37044a5 to your computer and use it in GitHub Desktop." data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;OPEN_IN_DESKTOP&quot;,&quot;git_repository_type&quot;:&quot;GIST&quot;,&quot;gist_id&quot;:77272322,&quot;originating_url&quot;:&quot;https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="37bb4192c41225b3d5300a549ac853b556e8f0d08b04d3104edc450cd10f252f" href="https://desktop.github.com/"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-desktop-download">
    <path d="M4.927 5.427l2.896 2.896a.25.25 0 00.354 0l2.896-2.896A.25.25 0 0010.896 5H8.75V.75a.75.75 0 10-1.5 0V5H5.104a.25.25 0 00-.177.427z"></path><path d="M1.573 2.573a.25.25 0 00-.073.177v7.5a.25.25 0 00.25.25h12.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-3a.75.75 0 110-1.5h3A1.75 1.75 0 0116 2.75v7.5A1.75 1.75 0 0114.25 12h-3.727c.099 1.041.52 1.872 1.292 2.757A.75.75 0 0111.25 16h-6.5a.75.75 0 01-.565-1.243c.772-.885 1.192-1.716 1.292-2.757H1.75A1.75 1.75 0 010 10.25v-7.5A1.75 1.75 0 011.75 1h3a.75.75 0 010 1.5h-3a.25.25 0 00-.177.073zM6.982 12a5.72 5.72 0 01-.765 2.5h3.566a5.72 5.72 0 01-.765-2.5H6.982z"></path>
</svg></a>
</div>


    <div class="ml-2">
      <a class="btn btn-sm" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;DOWNLOAD_ZIP&quot;,&quot;git_repository_type&quot;:&quot;GIST&quot;,&quot;gist_id&quot;:77272322,&quot;originating_url&quot;:&quot;https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="1218e2b4eb455b030585c7ea761cef4393f9257716d9cdbc2a72ed97d98bdca5" data-ga-click="Gist, download zip, location:gist overview" href="https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5/archive/990176f6e53c83212e43d485c8219e806bf3795a.zip">Download ZIP</a>
    </div>
  </div>
</div>


  </div>
</div>

<div class="container-lg px-3">
  <div class="repository-content gist-content">
    
  <div>
    
        <div class="js-gist-file-update-container js-task-list-container file-box">
  <div id="file-scripts-js" class="file my-2">
      <div class="file-header d-flex flex-md-items-center flex-items-start">
        <div class="file-actions flex-order-2 pt-0">

          <a href="https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5/raw/990176f6e53c83212e43d485c8219e806bf3795a/scripts.js" data-view-component="true" class="btn-sm btn">  Raw
  
</a>
        </div>
        <div class="file-info pr-4 d-flex flex-md-items-center flex-items-start flex-order-1 flex-auto">
          <span class="mr-1">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code-square color-fg-muted">
    <path fill-rule="evenodd" d="M1.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H1.75zM0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zm9.22 3.72a.75.75 0 000 1.06L10.69 8 9.22 9.47a.75.75 0 101.06 1.06l2-2a.75.75 0 000-1.06l-2-2a.75.75 0 00-1.06 0zM6.78 6.53a.75.75 0 00-1.06-1.06l-2 2a.75.75 0 000 1.06l2 2a.75.75 0 101.06-1.06L5.31 8l1.47-1.47z"></path>
</svg>
          </span>
          <a class="wb-break-all" href="https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5#file-scripts-js">
            <strong class="user-select-contain gist-blob-name css-truncate-target">
              scripts.js
            </strong>
          </a>
        </div>
      </div>
    
    <div itemprop="text" class="Box-body p-0 blob-wrapper data type-javascript  gist-border-0">

        
<div class="js-blob-code-container blob-code-content">

  <template class="js-file-alert-template"></template>
<template class="js-line-alert-template"></template>

  <table data-hpc="" class="highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file js-search-container" data-tab-size="8" data-paste-markdown-skip="" data-tagsearch-lang="JavaScript" data-tagsearch-path="scripts.js">
        <tbody><tr>
          <td id="file-scripts-js-L1" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="1"></td>
          <td id="file-scripts-js-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">(</span> <span class="pl-k">function</span><span class="pl-kos">(</span> <span class="pl-s1">$</span> <span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L2" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="2"></td>
          <td id="file-scripts-js-LC2" class="blob-code blob-code-inner js-file-line">    <span class="pl-s1">$</span><span class="pl-kos">(</span><span class="pl-smi">document</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">ready</span><span class="pl-kos">(</span><span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">{</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L3" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="3"></td>
          <td id="file-scripts-js-LC3" class="blob-code blob-code-inner js-file-line">      </td>
        </tr>
        <tr>
          <td id="file-scripts-js-L4" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="4"></td>
          <td id="file-scripts-js-LC4" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// Live Search</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L5" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="5"></td>
          <td id="file-scripts-js-LC5" class="blob-code blob-code-inner js-file-line">        <span class="pl-s1">$</span><span class="pl-kos">(</span><span class="pl-s">'#live-search-faux-input'</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">on</span><span class="pl-kos">(</span><span class="pl-s">'click'</span><span class="pl-kos">,</span> <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L6" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="6"></td>
          <td id="file-scripts-js-LC6" class="blob-code blob-code-inner js-file-line">            <span class="pl-s1">$</span><span class="pl-kos">(</span><span class="pl-s">'.live-search-modal'</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">fadeIn</span><span class="pl-kos">(</span><span class="pl-c1">500</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L7" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="7"></td>
          <td id="file-scripts-js-LC7" class="blob-code blob-code-inner js-file-line">            <span class="pl-s1">$</span><span class="pl-kos">(</span><span class="pl-s">'input#live-search-input'</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">focus</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L8" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="8"></td>
          <td id="file-scripts-js-LC8" class="blob-code blob-code-inner js-file-line">            <span class="pl-s1">$</span><span class="pl-kos">(</span><span class="pl-s">'#live-search-input'</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">addClass</span><span class="pl-kos">(</span><span class="pl-s">'live-search-to-show'</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L9" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="9"></td>
          <td id="file-scripts-js-LC9" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L10" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="10"></td>
          <td id="file-scripts-js-LC10" class="blob-code blob-code-inner js-file-line">        <span class="pl-s1">$</span><span class="pl-kos">(</span><span class="pl-s">'input#live-search-input'</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">on</span><span class="pl-kos">(</span><span class="pl-s">'input'</span><span class="pl-kos">,</span> <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L11" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="11"></td>
          <td id="file-scripts-js-LC11" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> <span class="pl-kos">(</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">value</span><span class="pl-kos">.</span><span class="pl-c1">length</span> <span class="pl-c1">&gt;=</span> <span class="pl-c1">3</span> <span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L12" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="12"></td>
          <td id="file-scripts-js-LC12" class="blob-code blob-code-inner js-file-line">                <span class="pl-s1">$</span><span class="pl-kos">.</span><span class="pl-en">ajax</span><span class="pl-kos">(</span><span class="pl-kos">{</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L13" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="13"></td>
          <td id="file-scripts-js-LC13" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c1">url</span>: <span class="pl-s1">live_search</span><span class="pl-kos">.</span><span class="pl-c1">ajax_url</span><span class="pl-kos">,</span> <span class="pl-c">// use the globally declared variable</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L14" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="14"></td>
          <td id="file-scripts-js-LC14" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c1">type</span>: <span class="pl-s">'POST'</span><span class="pl-kos">,</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L15" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="15"></td>
          <td id="file-scripts-js-LC15" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c1">data</span>: <span class="pl-kos">{</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L16" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="16"></td>
          <td id="file-scripts-js-LC16" class="blob-code blob-code-inner js-file-line">                        <span class="pl-c1">action</span>: <span class="pl-s">'live_search'</span><span class="pl-kos">,</span> <span class="pl-c">// Call the PHP function</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L17" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="17"></td>
          <td id="file-scripts-js-LC17" class="blob-code blob-code-inner js-file-line">                        <span class="pl-c1">keyword</span>: <span class="pl-s1">$</span><span class="pl-kos">(</span><span class="pl-s">'#live-search-input'</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">val</span><span class="pl-kos">(</span><span class="pl-kos">)</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L18" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="18"></td>
          <td id="file-scripts-js-LC18" class="blob-code blob-code-inner js-file-line">                    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L19" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="19"></td>
          <td id="file-scripts-js-LC19" class="blob-code blob-code-inner js-file-line">                    <span class="pl-en">success</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">data</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L20" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="20"></td>
          <td id="file-scripts-js-LC20" class="blob-code blob-code-inner js-file-line">                        <span class="pl-s1">$</span><span class="pl-kos">(</span><span class="pl-s">'.live-search-reset-btn'</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">fadeIn</span><span class="pl-kos">(</span><span class="pl-c1">500</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L21" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="21"></td>
          <td id="file-scripts-js-LC21" class="blob-code blob-code-inner js-file-line">                        <span class="pl-s1">$</span><span class="pl-kos">(</span><span class="pl-s">'.live-search-results'</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">delay</span><span class="pl-kos">(</span><span class="pl-c1">500</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">slideDown</span><span class="pl-kos">(</span><span class="pl-c1">400</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">html</span><span class="pl-kos">(</span><span class="pl-s1">data</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L22" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="22"></td>
          <td id="file-scripts-js-LC22" class="blob-code blob-code-inner js-file-line">                        <span class="pl-s1">$</span><span class="pl-kos">(</span><span class="pl-s">'.live-search-result'</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">each</span><span class="pl-kos">(</span><span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">index</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L23" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="23"></td>
          <td id="file-scripts-js-LC23" class="blob-code blob-code-inner js-file-line">                            <span class="pl-s1">$</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">delay</span><span class="pl-kos">(</span><span class="pl-c1">500</span><span class="pl-c1">*</span><span class="pl-s1">index</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">fadeTo</span><span class="pl-kos">(</span><span class="pl-c1">400</span><span class="pl-kos">,</span> <span class="pl-c1">1</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L24" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="24"></td>
          <td id="file-scripts-js-LC24" class="blob-code blob-code-inner js-file-line">                        <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L25" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="25"></td>
          <td id="file-scripts-js-LC25" class="blob-code blob-code-inner js-file-line">                    <span class="pl-kos">}</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L26" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="26"></td>
          <td id="file-scripts-js-LC26" class="blob-code blob-code-inner js-file-line">                <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L27" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="27"></td>
          <td id="file-scripts-js-LC27" class="blob-code blob-code-inner js-file-line">            <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L28" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="28"></td>
          <td id="file-scripts-js-LC28" class="blob-code blob-code-inner js-file-line">                <span class="pl-s1">$</span><span class="pl-kos">(</span><span class="pl-s">'.live-search-results'</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">html</span><span class="pl-kos">(</span><span class="pl-s">''</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L29" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="29"></td>
          <td id="file-scripts-js-LC29" class="blob-code blob-code-inner js-file-line">            <span class="pl-kos">}</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L30" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="30"></td>
          <td id="file-scripts-js-LC30" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L31" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="31"></td>
          <td id="file-scripts-js-LC31" class="blob-code blob-code-inner js-file-line">        <span class="pl-s1">$</span><span class="pl-kos">(</span><span class="pl-s">'.live-search-reset-btn'</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">on</span><span class="pl-kos">(</span><span class="pl-s">'click'</span><span class="pl-kos">,</span> <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L32" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="32"></td>
          <td id="file-scripts-js-LC32" class="blob-code blob-code-inner js-file-line">            <span class="pl-s1">$</span><span class="pl-kos">(</span><span class="pl-s">'.live-search-results'</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">html</span><span class="pl-kos">(</span><span class="pl-s">''</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">slideUp</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L33" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="33"></td>
          <td id="file-scripts-js-LC33" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L34" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="34"></td>
          <td id="file-scripts-js-LC34" class="blob-code blob-code-inner js-file-line">        <span class="pl-s1">$</span><span class="pl-kos">(</span><span class="pl-s">'.live-search-close'</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">on</span><span class="pl-kos">(</span><span class="pl-s">'click'</span><span class="pl-kos">,</span> <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L35" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="35"></td>
          <td id="file-scripts-js-LC35" class="blob-code blob-code-inner js-file-line">            <span class="pl-s1">$</span><span class="pl-kos">(</span><span class="pl-s">'.live-search-modal'</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">fadeOut</span><span class="pl-kos">(</span><span class="pl-c1">500</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L36" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="36"></td>
          <td id="file-scripts-js-LC36" class="blob-code blob-code-inner js-file-line">            <span class="pl-s1">$</span><span class="pl-kos">(</span><span class="pl-s">'#live-search-input'</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">removeClass</span><span class="pl-kos">(</span><span class="pl-s">'live-search-to-show'</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">val</span><span class="pl-kos">(</span><span class="pl-s">''</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L37" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="37"></td>
          <td id="file-scripts-js-LC37" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L38" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="38"></td>
          <td id="file-scripts-js-LC38" class="blob-code blob-code-inner js-file-line">      </td>
        </tr>
        <tr>
          <td id="file-scripts-js-L39" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="39"></td>
          <td id="file-scripts-js-LC39" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
        </tr>
        <tr>
          <td id="file-scripts-js-L40" class="blob-num js-line-number js-code-nav-line-number js-blob-rnum" data-line-number="40"></td>
          <td id="file-scripts-js-LC40" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">}</span> <span class="pl-kos">)</span><span class="pl-kos">(</span> <span class="pl-s1">jQuery</span> <span class="pl-kos">)</span><span class="pl-kos">;</span></td>
        </tr>
  </tbody></table>
</div>


    </div>


  </div>
</div>


      <a name="comments"></a>
      <div class="js-quote-selection-container" data-quote-markdown=".js-comment-body">
        <div class="js-discussion ">
          <div class="ml-md-6 pl-md-3 ml-0 pl-0">
            



<!-- Rendered timeline since 2021-09-16 15:24:16 -->
<div id="partial-timeline-marker" class="js-timeline-marker js-updatable-content" data-last-modified="Thu, 16 Sep 2021 22:24:16 GMT">
</div>

          </div>

          <div class="discussion-timeline-actions">
              <div data-view-component="true" class="flash flash-warn mt-3">
  
  
    <a rel="nofollow" class="btn btn-primary" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;signed out comment&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="03ceea2c7d0417c2e96af3edd00084d671fee59f12bd9adcd7cfcda7cd2d4320" href="https://gist.github.com/join?source=comment-gist">Sign up for free</a>
    <strong>to join this conversation on GitHub</strong>.
    Already have an account?
    <a rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;signed out comment&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="6756830c4f30f630800b219594144e64f6176a0d7baeb732b43dab1470defc05" data-test-selector="comments-sign-in-link" href="https://gist.github.com/login?return_to=https%3A%2F%2Fgist.github.com%2FminiMAC%2F12712ecf5d3870206ba72592b37044a5">Sign in to comment</a>


  
</div>
          </div>
        </div>
      </div>
</div>
  </div>
</div><!-- /.container -->

    </main>
  </div>

  </div>

          <footer class="footer width-full container-lg p-responsive">
  <h2 class="sr-only">Footer</h2>

  <div class="position-relative d-flex flex-items-center pb-2 f6 color-fg-muted border-top color-border-muted flex-column-reverse flex-lg-row flex-wrap flex-lg-nowrap mt-6 pt-6">
    <div class="list-style-none d-flex flex-wrap col-0 col-lg-2 flex-justify-start flex-lg-justify-between mb-2 mb-lg-0">
      <div class="mt-2 mt-lg-0 d-flex flex-items-center">
        <a aria-label="Homepage" title="GitHub" class="footer-octicon mr-2" href="https://github.com/">
          <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
</svg>
</a>        <span>
        ?? 2022 GitHub, Inc.
        </span>
      </div>
    </div>

    <nav aria-label="footer" class="col-12 col-lg-8">
      <h3 class="sr-only" id="sr-footer-heading">Footer navigation</h3>
      <ul class="list-style-none d-flex flex-wrap col-12 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0" aria-labelledby="sr-footer-heading">
          <li class="mr-3 mr-lg-0"><a href="https://docs.github.com/en/github/site-policy/github-terms-of-service" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to terms&quot;,&quot;label&quot;:&quot;text:terms&quot;}">Terms</a></li>
          <li class="mr-3 mr-lg-0"><a href="https://docs.github.com/en/github/site-policy/github-privacy-statement" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to privacy&quot;,&quot;label&quot;:&quot;text:privacy&quot;}">Privacy</a></li>
          <li class="mr-3 mr-lg-0"><a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to security&quot;,&quot;label&quot;:&quot;text:security&quot;}" href="https://github.com/security">Security</a></li>
          <li class="mr-3 mr-lg-0"><a href="https://www.githubstatus.com/" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to status&quot;,&quot;label&quot;:&quot;text:status&quot;}">Status</a></li>
          <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to help, text:Docs" href="https://docs.github.com/">Docs</a></li>
          <li class="mr-3 mr-lg-0"><a href="https://support.github.com/?tags=dotcom-footer" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to contact&quot;,&quot;label&quot;:&quot;text:contact&quot;}">Contact GitHub</a></li>
          <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to Pricing&quot;,&quot;label&quot;:&quot;text:Pricing&quot;}">Pricing</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://docs.github.com/" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to api&quot;,&quot;label&quot;:&quot;text:api&quot;}">API</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://services.github.com/" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to training&quot;,&quot;label&quot;:&quot;text:training&quot;}">Training</a></li>
          <li class="mr-3 mr-lg-0"><a href="https://github.blog/" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to blog&quot;,&quot;label&quot;:&quot;text:blog&quot;}">Blog</a></li>
          <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>
      </ul>
    </nav>
  </div>

  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 color-fg-muted"></span>
  </div>
</footer>




  <div id="ajax-error-message" class="ajax-error-message flash flash-error" hidden="">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
</svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
</svg>
    </button>
    You can???t perform that action at this time.
  </div>

  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden="">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
</svg>
    <span class="js-stale-session-flash-signed-in" hidden="">You signed in with another tab or window. <a href="https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden="">You signed out in another tab or window. <a href="https://gist.github.com/miniMAC/12712ecf5d3870206ba72592b37044a5">Reload</a> to refresh your session.</span>
  </div>
    <template id="site-details-dialog"></template>

    <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box color-shadow-large" style="width:360px;"></div>
</div>

    <template id="snippet-clipboard-copy-button"></template>




  


<div aria-live="polite" class="sr-only"></div></body></html>