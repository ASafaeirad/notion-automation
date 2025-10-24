interface BaseBlock {
  object?: 'block';
}

type AudioBlock = BaseBlock & {
  audio: {
    external: { url: TextRequest };
    type?: 'external';
    caption?: RichTextItemRequest[];
  };
  type?: 'audio';
};

type BookmarkBlock = BaseBlock & {
  bookmark: {
    url: string;
    caption?: RichTextItemRequest[];
  };
  type?: 'bookmark';
};

type BreadcrumbBlock = BaseBlock & {
  breadcrumb: EmptyObject;
  type?: 'breadcrumb';
};

type CodeBlock = BaseBlock & {
  code: {
    rich_text: RichTextItemRequest[];
    language: LanguageRequest;
    caption?: RichTextItemRequest[];
  };
  type?: 'code';
};

type DividerBlock = BaseBlock & {
  divider: EmptyObject;
  type?: 'divider';
};

type EmbedBlock = BaseBlock & {
  embed: {
    url: string;
    caption?: RichTextItemRequest[];
  };
  type?: 'embed';
};

type EquationBlock = BaseBlock & {
  equation: {
    expression: string;
  };
  type?: 'equation';
};

type FileBlock = BaseBlock & {
  file: {
    external: {
      url: TextRequest;
    };
    type?: 'external';
    caption?: RichTextItemRequest[];
  };
  type?: 'file';
};

type ImageBlock = BaseBlock & {
  image: {
    external: {
      url: TextRequest;
    };
    type?: 'external';
    caption?: RichTextItemRequest[];
  };
  type?: 'image';
};

type LinkToPageBlock = BaseBlock & {
  link_to_page:
    | {
        database_id: IdRequest;
        type?: 'database_id';
      }
    | {
        page_id: IdRequest;
        type?: 'page_id';
      };
  type?: 'link_to_page';
};

type PdfBlock = BaseBlock & {
  pdf: {
    external: {
      url: TextRequest;
    };
    type?: 'external';
    caption?: RichTextItemRequest[];
  };
  type?: 'pdf';
};

type TableOfContentsBlock = BaseBlock & {
  table_of_contents: {
    color?: ApiColor;
  };
  type?: 'table_of_contents';
};

type TableRowBlock = BaseBlock & {
  table_row: {
    cells: RichTextItemRequest[][];
  };
  type?: 'table_row';
};

type VideoBlock = BaseBlock & {
  video: {
    external: {
      url: TextRequest;
    };
    type?: 'external';
    caption?: RichTextItemRequest[];
  };
  type?: 'video';
};

// Block types with children (using BlockObjectRequestWithoutChildren to avoid infinite recursion)
type BulletedListItemBlock = BaseBlock & {
  bulleted_list_item: {
    rich_text: RichTextItemRequest[];
    color?: ApiColor;
    children?: BlockObjectRequestWithoutChildren[];
  };
  type?: 'bulleted_list_item';
};

type CalloutBlock = BaseBlock & {
  callout: {
    rich_text: RichTextItemRequest[];
    color?: ApiColor;
    children?: BlockObjectRequestWithoutChildren[];
    icon?:
      | {
          emoji: EmojiRequest;
          type?: 'emoji';
        }
      | {
          external: {
            url: TextRequest;
          };
          type?: 'external';
        };
  };
  type?: 'callout';
};

type Heading1Block = BaseBlock & {
  heading_1: {
    rich_text: RichTextItemRequest[];
    color?: ApiColor;
    is_toggleable?: boolean;
    children?: BlockObjectRequestWithoutChildren[];
  };
  type?: 'heading_1';
};

type Heading2Block = BaseBlock & {
  heading_2: {
    rich_text: RichTextItemRequest[];
    color?: ApiColor;
    is_toggleable?: boolean;
    children?: BlockObjectRequestWithoutChildren[];
  };
  type?: 'heading_2';
};

type Heading3Block = BaseBlock & {
  heading_3: {
    rich_text: RichTextItemRequest[];
    color?: ApiColor;
    is_toggleable?: boolean;
    children?: BlockObjectRequestWithoutChildren[];
  };
  type?: 'heading_3';
};

type NumberedListItemBlock = BaseBlock & {
  numbered_list_item: {
    rich_text: RichTextItemRequest[];
    color?: ApiColor;
    children?: BlockObjectRequestWithoutChildren[];
  };
  type?: 'numbered_list_item';
};

type ParagraphBlock = BaseBlock & {
  paragraph: {
    rich_text: RichTextItemRequest[];
    color?: ApiColor;
    children?: BlockObjectRequestWithoutChildren[];
  };
  type?: 'paragraph';
};

type QuoteBlock = BaseBlock & {
  quote: {
    rich_text: RichTextItemRequest[];
    color?: ApiColor;
    children?: BlockObjectRequestWithoutChildren[];
  };
  type?: 'quote';
};

type SyncedBlock = BaseBlock & {
  synced_block: {
    synced_from: {
      block_id: IdRequest;
      type?: 'block_id';
    } | null;
    children?: BlockObjectRequestWithoutChildren[];
  };
  type?: 'synced_block';
};

type TemplateBlock = BaseBlock & {
  template: {
    rich_text: RichTextItemRequest[];
    children?: BlockObjectRequestWithoutChildren[];
  };
  type?: 'template';
};

type ToDoBlock = BaseBlock & {
  to_do: {
    rich_text: RichTextItemRequest[];
    color?: ApiColor;
    children?: BlockObjectRequestWithoutChildren[];
    checked?: boolean;
  };
  type?: 'to_do';
};

type ToggleBlock = BaseBlock & {
  toggle: {
    rich_text: RichTextItemRequest[];
    color?: ApiColor;
    children?: BlockObjectRequestWithoutChildren[];
  };
  type?: 'toggle';
};

// Special container blocks
type ColumnListBlock = BaseBlock & {
  column_list: {
    children: ColumnBlock[];
  };
  type?: 'column_list';
};

type ColumnBlock = BaseBlock & {
  column: {
    children: BlockObjectRequestWithoutChildren[];
  };
  type?: 'column';
};

type TableBlock = BaseBlock & {
  table: {
    table_width: number;
    children: BlockObjectRequestWithoutChildren[];
    has_column_header?: boolean;
    has_row_header?: boolean;
  };
  type?: 'table';
};

// Reconstruct the union type using the individual block types
type BlockObjectRequest =
  | AudioBlock
  | BookmarkBlock
  | BreadcrumbBlock
  | BulletedListItemBlock
  | CalloutBlock
  | CodeBlock
  | ColumnBlock
  | ColumnListBlock
  | DividerBlock
  | EmbedBlock
  | EquationBlock
  | FileBlock
  | Heading1Block
  | Heading2Block
  | Heading3Block
  | ImageBlock
  | LinkToPageBlock
  | NumberedListItemBlock
  | ParagraphBlock
  | PdfBlock
  | QuoteBlock
  | SyncedBlock
  | TableBlock
  | TableOfContentsBlock
  | TableRowBlock
  | TemplateBlock
  | ToDoBlock
  | ToggleBlock
  | VideoBlock;

type Children = BlockObjectRequest[];
