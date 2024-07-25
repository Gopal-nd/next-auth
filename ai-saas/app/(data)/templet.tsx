
export const templates = [
  {
    name: 'Blog Title',
    desc: 'An AI tool that generates blog titles based on your blog topic',
    category: 'Blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/6114/6114045.png',
    aiPrompt: 'Give me five blog topic ideas in bullet points on the given niche topic and present the results in Rich Text Editor format.',
    slug: 'blog-title',
    form: [
      {
        label: 'Enter Your Blog Niche',
        field: 'input',
        name: 'niche',
        required: true,
      },
      {
        label: 'Enter Your Blog Outline',
        field: 'textarea',
        name: 'outline',
      },
    ],
  },
  {
    name: 'Instagram Hash Tag Generator',
    desc: 'Generate trending Instagram hashtags based on your niche.',
    category: 'Social Media',
    icon: 'https://cdn-icons-png.flaticon.com/128/1409/1409946.png',
    aiPrompt: 'Generate a list of trending Instagram hashtags for the given niche.',
    slug: 'instagram-hash-tag-generator',
    form: [
      {
        label: 'Enter Your Instagram Niche',
        field: 'input',
        name: 'niche',
        required: true,
      },
    ],
  },
  {
    name: 'Write Email',
    desc: 'This is your AI-powered Email writer, helping you to write more professional emails.',
    category: 'Communication',
    icon: 'https://cdn-icons-png.flaticon.com/128/561/561127.png',
    aiPrompt: 'Write a professional email based on the provided details.',
    slug: 'write-email',
    form: [
      {
        label: 'Enter Email Subject',
        field: 'input',
        name: 'subject',
        required: true,
      },
      {
        label: 'Enter Email Content',
        field: 'textarea',
        name: 'content',
        required: true,
      },
    ],
  },
  {
    name: 'Rewrite Email',
    desc: 'This is your AI-powered Email rewriter, helping you correct your email grammar and write more professional emails.',
    category: 'Communication',
    icon: 'https://cdn-icons-png.flaticon.com/128/561/561127.png',
    aiPrompt: 'Rewrite the given email to be more professional and grammatically correct.',
    slug: 'rewrite-email',
    form: [
      {
        label: 'Enter Your Email Content',
        field: 'textarea',
        name: 'content',
        required: true,
      },
    ],
  },
  {
    name: 'Blog Content',
    desc: 'An AI tool that generates engaging blog content based on your provided outline.',
    category: 'Blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/6114/6114045.png',
    aiPrompt: 'Generate a blog post based on the given outline.',
    slug: 'blog-content',
    form: [
      {
        label: 'Enter Your Blog Outline',
        field: 'textarea',
        name: 'outline',
        required: true,
      },
    ],
  },
  {
    name: 'Youtube SEO Title',
    desc: 'Generate catchy and SEO-optimized YouTube video titles.',
    category: 'Video',
    icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
    aiPrompt: 'Generate an SEO-optimized YouTube video title based on the given video topic.',
    slug: 'youtube-seo-title',
    form: [
      {
        label: 'Enter Your Video Topic',
        field: 'input',
        name: 'topic',
        required: true,
      },
    ],
  },
  {
    name: 'Youtube Description',
    desc: 'Generate engaging and SEO-optimized YouTube video descriptions.',
    category: 'Video',
    icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
    aiPrompt: 'Generate an engaging YouTube video description based on the given video topic.',
    slug: 'youtube-description',
    form: [
      {
        label: 'Enter Your Video Topic',
        field: 'input',
        name: 'topic',
        required: true,
      },
    ],
  },
  {
    name: 'Youtube Tags',
    desc: 'Generate SEO-optimized tags for your YouTube videos.',
    category: 'Video',
    icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
    aiPrompt: 'Generate a list of SEO-optimized tags for the given video topic.',
    slug: 'youtube-tags',
    form: [
      {
        label: 'Enter Your Video Topic',
        field: 'input',
        name: 'topic',
        required: true,
      },
    ],
  },
  {
    name: 'Rewrite Article (Plagiarism Free)',
    desc: 'Use this tool to rewrite existing articles or blog posts to make them plagiarism-free and bypass AI detectors.',
    category: 'Writing',
    icon: 'https://cdn-icons-png.flaticon.com/128/6096/6096935.png',
    aiPrompt: 'Rewrite the given article to make it plagiarism-free and bypass AI detectors.',
    slug: 'rewrite-article',
    form: [
      {
        label: 'Enter Your Article Content',
        field: 'textarea',
        name: 'content',
        required: true,
      },
    ],
  },
  {
    name: 'Text Improver',
    desc: 'This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.',
    category: 'Writing',
    icon: 'https://cdn-icons-png.flaticon.com/128/709/709586.png',
    aiPrompt: 'Improve the given text by eliminating errors and redundancies, and suggest better word choices.',
    slug: 'text-improver',
    form: [
      {
        label: 'Enter Your Text',
        field: 'textarea',
        name: 'text',
        required: true,
      },
    ],
  },
  {
    name: 'Add Emojis to Text',
    desc: 'An AI tool that adds relevant emojis to your text, making it more engaging and expressive.',
    category: 'Social Media',
    icon: 'https://cdn-icons-png.flaticon.com/128/620/620836.png',
    aiPrompt: 'Add relevant emojis to the given text to make it more engaging and expressive.',
    slug: 'add-emojis-to-text',
    form: [
      {
        label: 'Enter Your Text',
        field: 'textarea',
        name: 'text',
        required: true,
      },
    ],
  },
  {
    name: 'Instagram Post Generator',
    desc: 'Generate catchy and engaging Instagram post content based on your niche.',
    category: 'Social Media',
    icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
    aiPrompt: 'Generate an engaging Instagram post based on the given niche.',
    slug: 'instagram-post-generator',
    form: [
      {
        label: 'Enter Your Instagram Niche',
        field: 'input',
        name: 'niche',
        required: true,
      },
    ],
  },
  {
    name: 'Instagram Post/Reel Idea',
    desc: 'Generate new and trending Instagram post or reel ideas based on your niche.',
    category: 'Social Media',
    icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
    aiPrompt: 'Generate new and trending Instagram post or reel ideas based on the given niche.',
    slug: 'instagram-post-reel-idea',
    form: [
      {
        label: 'Enter Your Instagram Niche',
        field: 'input',
        name: 'niche',
        required: true,
      },
    ],
  },
  {
    name: 'English Grammar Check',
    desc: 'AI model to correct your English grammar by providing the text.',
    category: 'Writing',
    icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968520.png',
    aiPrompt: 'Correct the grammar of the given English text.',
    slug: 'english-grammar-check',
    form: [
      {
        label: 'Enter Your Text',
        field: 'textarea',
        name: 'text',
        required: true,
      },
    ],
  }
]