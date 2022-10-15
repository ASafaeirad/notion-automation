type BlockObjectRequest =
  | {
      embed: {
        url: string;
        caption?: Array<RichTextItemRequest>;
      };
      type?: 'embed';
      object?: 'block';
    }
  | {
      bookmark: {
        url: string;
        caption?: Array<RichTextItemRequest>;
      };
      type?: 'bookmark';
      object?: 'block';
    }
  | {
      image: {
        external: {
          url: TextRequest;
        };
        type?: 'external';
        caption?: Array<RichTextItemRequest>;
      };
      type?: 'image';
      object?: 'block';
    }
  | {
      video: {
        external: {
          url: TextRequest;
        };
        type?: 'external';
        caption?: Array<RichTextItemRequest>;
      };
      type?: 'video';
      object?: 'block';
    }
  | {
      pdf: {
        external: {
          url: TextRequest;
        };
        type?: 'external';
        caption?: Array<RichTextItemRequest>;
      };
      type?: 'pdf';
      object?: 'block';
    }
  | {
      file: {
        external: {
          url: TextRequest;
        };
        type?: 'external';
        caption?: Array<RichTextItemRequest>;
      };
      type?: 'file';
      object?: 'block';
    }
  | {
      audio: {
        external: {
          url: TextRequest;
        };
        type?: 'external';
        caption?: Array<RichTextItemRequest>;
      };
      type?: 'audio';
      object?: 'block';
    }
  | {
      code: {
        rich_text: Array<RichTextItemRequest>;
        language: LanguageRequest;
        caption?: Array<RichTextItemRequest>;
      };
      type?: 'code';
      object?: 'block';
    }
  | {
      equation: {
        expression: string;
      };
      type?: 'equation';
      object?: 'block';
    }
  | {
      divider: EmptyObject;
      type?: 'divider';
      object?: 'block';
    }
  | {
      breadcrumb: EmptyObject;
      type?: 'breadcrumb';
      object?: 'block';
    }
  | {
      table_of_contents: {
        color?: ApiColor;
      };
      type?: 'table_of_contents';
      object?: 'block';
    }
  | {
      link_to_page:
        | {
            page_id: IdRequest;
            type?: 'page_id';
          }
        | {
            database_id: IdRequest;
            type?: 'database_id';
          };
      type?: 'link_to_page';
      object?: 'block';
    }
  | {
      table_row: {
        cells: Array<Array<RichTextItemRequest>>;
      };
      type?: 'table_row';
      object?: 'block';
    }
  | {
      column_list: {
        children: Array<{
          column: {
            children: Array<
              | {
                  embed: {
                    url: string;
                    caption?: Array<RichTextItemRequest>;
                  };
                  type?: 'embed';
                  object?: 'block';
                }
              | {
                  bookmark: {
                    url: string;
                    caption?: Array<RichTextItemRequest>;
                  };
                  type?: 'bookmark';
                  object?: 'block';
                }
              | {
                  image: {
                    external: {
                      url: TextRequest;
                    };
                    type?: 'external';
                    caption?: Array<RichTextItemRequest>;
                  };
                  type?: 'image';
                  object?: 'block';
                }
              | {
                  video: {
                    external: {
                      url: TextRequest;
                    };
                    type?: 'external';
                    caption?: Array<RichTextItemRequest>;
                  };
                  type?: 'video';
                  object?: 'block';
                }
              | {
                  pdf: {
                    external: {
                      url: TextRequest;
                    };
                    type?: 'external';
                    caption?: Array<RichTextItemRequest>;
                  };
                  type?: 'pdf';
                  object?: 'block';
                }
              | {
                  file: {
                    external: {
                      url: TextRequest;
                    };
                    type?: 'external';
                    caption?: Array<RichTextItemRequest>;
                  };
                  type?: 'file';
                  object?: 'block';
                }
              | {
                  audio: {
                    external: {
                      url: TextRequest;
                    };
                    type?: 'external';
                    caption?: Array<RichTextItemRequest>;
                  };
                  type?: 'audio';
                  object?: 'block';
                }
              | {
                  code: {
                    rich_text: Array<RichTextItemRequest>;
                    language: LanguageRequest;
                    caption?: Array<RichTextItemRequest>;
                  };
                  type?: 'code';
                  object?: 'block';
                }
              | {
                  equation: {
                    expression: string;
                  };
                  type?: 'equation';
                  object?: 'block';
                }
              | {
                  divider: EmptyObject;
                  type?: 'divider';
                  object?: 'block';
                }
              | {
                  breadcrumb: EmptyObject;
                  type?: 'breadcrumb';
                  object?: 'block';
                }
              | {
                  table_of_contents: {
                    color?: ApiColor;
                  };
                  type?: 'table_of_contents';
                  object?: 'block';
                }
              | {
                  link_to_page:
                    | {
                        page_id: IdRequest;
                        type?: 'page_id';
                      }
                    | {
                        database_id: IdRequest;
                        type?: 'database_id';
                      };
                  type?: 'link_to_page';
                  object?: 'block';
                }
              | {
                  table_row: {
                    cells: Array<Array<RichTextItemRequest>>;
                  };
                  type?: 'table_row';
                  object?: 'block';
                }
              | {
                  heading_1: {
                    rich_text: Array<RichTextItemRequest>;
                    color?: ApiColor;
                    is_toggleable?: boolean;
                    children?: Array<BlockObjectRequestWithoutChildren>;
                  };
                  type?: 'heading_1';
                  object?: 'block';
                }
              | {
                  heading_2: {
                    rich_text: Array<RichTextItemRequest>;
                    color?: ApiColor;
                    is_toggleable?: boolean;
                    children?: Array<BlockObjectRequestWithoutChildren>;
                  };
                  type?: 'heading_2';
                  object?: 'block';
                }
              | {
                  heading_3: {
                    rich_text: Array<RichTextItemRequest>;
                    color?: ApiColor;
                    is_toggleable?: boolean;
                    children?: Array<BlockObjectRequestWithoutChildren>;
                  };
                  type?: 'heading_3';
                  object?: 'block';
                }
              | {
                  paragraph: {
                    rich_text: Array<RichTextItemRequest>;
                    color?: ApiColor;
                    children?: Array<BlockObjectRequestWithoutChildren>;
                  };
                  type?: 'paragraph';
                  object?: 'block';
                }
              | {
                  bulleted_list_item: {
                    rich_text: Array<RichTextItemRequest>;
                    color?: ApiColor;
                    children?: Array<BlockObjectRequestWithoutChildren>;
                  };
                  type?: 'bulleted_list_item';
                  object?: 'block';
                }
              | {
                  numbered_list_item: {
                    rich_text: Array<RichTextItemRequest>;
                    color?: ApiColor;
                    children?: Array<BlockObjectRequestWithoutChildren>;
                  };
                  type?: 'numbered_list_item';
                  object?: 'block';
                }
              | {
                  quote: {
                    rich_text: Array<RichTextItemRequest>;
                    color?: ApiColor;
                    children?: Array<BlockObjectRequestWithoutChildren>;
                  };
                  type?: 'quote';
                  object?: 'block';
                }
              | {
                  to_do: {
                    rich_text: Array<RichTextItemRequest>;
                    color?: ApiColor;
                    children?: Array<BlockObjectRequestWithoutChildren>;
                    checked?: boolean;
                  };
                  type?: 'to_do';
                  object?: 'block';
                }
              | {
                  toggle: {
                    rich_text: Array<RichTextItemRequest>;
                    color?: ApiColor;
                    children?: Array<BlockObjectRequestWithoutChildren>;
                  };
                  type?: 'toggle';
                  object?: 'block';
                }
              | {
                  template: {
                    rich_text: Array<RichTextItemRequest>;
                    children?: Array<BlockObjectRequestWithoutChildren>;
                  };
                  type?: 'template';
                  object?: 'block';
                }
              | {
                  callout: {
                    rich_text: Array<RichTextItemRequest>;
                    color?: ApiColor;
                    children?: Array<BlockObjectRequestWithoutChildren>;
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
                  object?: 'block';
                }
              | {
                  synced_block: {
                    synced_from: {
                      block_id: IdRequest;
                      type?: 'block_id';
                    } | null;
                    children?: Array<BlockObjectRequestWithoutChildren>;
                  };
                  type?: 'synced_block';
                  object?: 'block';
                }
            >;
          };
          type?: 'column';
          object?: 'block';
        }>;
      };
      type?: 'column_list';
      object?: 'block';
    }
  | {
      column: {
        children: Array<
          | {
              embed: {
                url: string;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'embed';
              object?: 'block';
            }
          | {
              bookmark: {
                url: string;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'bookmark';
              object?: 'block';
            }
          | {
              image: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'image';
              object?: 'block';
            }
          | {
              video: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'video';
              object?: 'block';
            }
          | {
              pdf: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'pdf';
              object?: 'block';
            }
          | {
              file: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'file';
              object?: 'block';
            }
          | {
              audio: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'audio';
              object?: 'block';
            }
          | {
              code: {
                rich_text: Array<RichTextItemRequest>;
                language: LanguageRequest;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'code';
              object?: 'block';
            }
          | {
              equation: {
                expression: string;
              };
              type?: 'equation';
              object?: 'block';
            }
          | {
              divider: EmptyObject;
              type?: 'divider';
              object?: 'block';
            }
          | {
              breadcrumb: EmptyObject;
              type?: 'breadcrumb';
              object?: 'block';
            }
          | {
              table_of_contents: {
                color?: ApiColor;
              };
              type?: 'table_of_contents';
              object?: 'block';
            }
          | {
              link_to_page:
                | {
                    page_id: IdRequest;
                    type?: 'page_id';
                  }
                | {
                    database_id: IdRequest;
                    type?: 'database_id';
                  };
              type?: 'link_to_page';
              object?: 'block';
            }
          | {
              table_row: {
                cells: Array<Array<RichTextItemRequest>>;
              };
              type?: 'table_row';
              object?: 'block';
            }
          | {
              heading_1: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_1';
              object?: 'block';
            }
          | {
              heading_2: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_2';
              object?: 'block';
            }
          | {
              heading_3: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_3';
              object?: 'block';
            }
          | {
              paragraph: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'paragraph';
              object?: 'block';
            }
          | {
              bulleted_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'bulleted_list_item';
              object?: 'block';
            }
          | {
              numbered_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'numbered_list_item';
              object?: 'block';
            }
          | {
              quote: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'quote';
              object?: 'block';
            }
          | {
              to_do: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
                checked?: boolean;
              };
              type?: 'to_do';
              object?: 'block';
            }
          | {
              toggle: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'toggle';
              object?: 'block';
            }
          | {
              template: {
                rich_text: Array<RichTextItemRequest>;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'template';
              object?: 'block';
            }
          | {
              callout: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
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
              object?: 'block';
            }
          | {
              synced_block: {
                synced_from: {
                  block_id: IdRequest;
                  type?: 'block_id';
                } | null;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'synced_block';
              object?: 'block';
            }
        >;
      };
      type?: 'column';
      object?: 'block';
    }
  | {
      table: {
        table_width: number;
        children: Array<BlockObjectRequestWithoutChildren>;
        has_column_header?: boolean;
        has_row_header?: boolean;
      };
      type?: 'table';
      object?: 'block';
    }
  | {
      heading_1: {
        rich_text: Array<RichTextItemRequest>;
        color?: ApiColor;
        is_toggleable?: boolean;
        children?: Array<
          | {
              embed: {
                url: string;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'embed';
              object?: 'block';
            }
          | {
              bookmark: {
                url: string;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'bookmark';
              object?: 'block';
            }
          | {
              image: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'image';
              object?: 'block';
            }
          | {
              video: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'video';
              object?: 'block';
            }
          | {
              pdf: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'pdf';
              object?: 'block';
            }
          | {
              file: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'file';
              object?: 'block';
            }
          | {
              audio: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'audio';
              object?: 'block';
            }
          | {
              code: {
                rich_text: Array<RichTextItemRequest>;
                language: LanguageRequest;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'code';
              object?: 'block';
            }
          | {
              equation: {
                expression: string;
              };
              type?: 'equation';
              object?: 'block';
            }
          | {
              divider: EmptyObject;
              type?: 'divider';
              object?: 'block';
            }
          | {
              breadcrumb: EmptyObject;
              type?: 'breadcrumb';
              object?: 'block';
            }
          | {
              table_of_contents: {
                color?: ApiColor;
              };
              type?: 'table_of_contents';
              object?: 'block';
            }
          | {
              link_to_page:
                | {
                    page_id: IdRequest;
                    type?: 'page_id';
                  }
                | {
                    database_id: IdRequest;
                    type?: 'database_id';
                  };
              type?: 'link_to_page';
              object?: 'block';
            }
          | {
              table_row: {
                cells: Array<Array<RichTextItemRequest>>;
              };
              type?: 'table_row';
              object?: 'block';
            }
          | {
              heading_1: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_1';
              object?: 'block';
            }
          | {
              heading_2: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_2';
              object?: 'block';
            }
          | {
              heading_3: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_3';
              object?: 'block';
            }
          | {
              paragraph: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'paragraph';
              object?: 'block';
            }
          | {
              bulleted_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'bulleted_list_item';
              object?: 'block';
            }
          | {
              numbered_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'numbered_list_item';
              object?: 'block';
            }
          | {
              quote: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'quote';
              object?: 'block';
            }
          | {
              to_do: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
                checked?: boolean;
              };
              type?: 'to_do';
              object?: 'block';
            }
          | {
              toggle: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'toggle';
              object?: 'block';
            }
          | {
              template: {
                rich_text: Array<RichTextItemRequest>;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'template';
              object?: 'block';
            }
          | {
              callout: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
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
              object?: 'block';
            }
          | {
              synced_block: {
                synced_from: {
                  block_id: IdRequest;
                  type?: 'block_id';
                } | null;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'synced_block';
              object?: 'block';
            }
        >;
      };
      type?: 'heading_1';
      object?: 'block';
    }
  | {
      heading_2: {
        rich_text: Array<RichTextItemRequest>;
        color?: ApiColor;
        is_toggleable?: boolean;
        children?: Array<
          | {
              embed: {
                url: string;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'embed';
              object?: 'block';
            }
          | {
              bookmark: {
                url: string;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'bookmark';
              object?: 'block';
            }
          | {
              image: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'image';
              object?: 'block';
            }
          | {
              video: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'video';
              object?: 'block';
            }
          | {
              pdf: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'pdf';
              object?: 'block';
            }
          | {
              file: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'file';
              object?: 'block';
            }
          | {
              audio: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'audio';
              object?: 'block';
            }
          | {
              code: {
                rich_text: Array<RichTextItemRequest>;
                language: LanguageRequest;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'code';
              object?: 'block';
            }
          | {
              equation: {
                expression: string;
              };
              type?: 'equation';
              object?: 'block';
            }
          | {
              divider: EmptyObject;
              type?: 'divider';
              object?: 'block';
            }
          | {
              breadcrumb: EmptyObject;
              type?: 'breadcrumb';
              object?: 'block';
            }
          | {
              table_of_contents: {
                color?: ApiColor;
              };
              type?: 'table_of_contents';
              object?: 'block';
            }
          | {
              link_to_page:
                | {
                    page_id: IdRequest;
                    type?: 'page_id';
                  }
                | {
                    database_id: IdRequest;
                    type?: 'database_id';
                  };
              type?: 'link_to_page';
              object?: 'block';
            }
          | {
              table_row: {
                cells: Array<Array<RichTextItemRequest>>;
              };
              type?: 'table_row';
              object?: 'block';
            }
          | {
              heading_1: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_1';
              object?: 'block';
            }
          | {
              heading_2: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_2';
              object?: 'block';
            }
          | {
              heading_3: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_3';
              object?: 'block';
            }
          | {
              paragraph: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'paragraph';
              object?: 'block';
            }
          | {
              bulleted_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'bulleted_list_item';
              object?: 'block';
            }
          | {
              numbered_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'numbered_list_item';
              object?: 'block';
            }
          | {
              quote: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'quote';
              object?: 'block';
            }
          | {
              to_do: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
                checked?: boolean;
              };
              type?: 'to_do';
              object?: 'block';
            }
          | {
              toggle: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'toggle';
              object?: 'block';
            }
          | {
              template: {
                rich_text: Array<RichTextItemRequest>;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'template';
              object?: 'block';
            }
          | {
              callout: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
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
              object?: 'block';
            }
          | {
              synced_block: {
                synced_from: {
                  block_id: IdRequest;
                  type?: 'block_id';
                } | null;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'synced_block';
              object?: 'block';
            }
        >;
      };
      type?: 'heading_2';
      object?: 'block';
    }
  | {
      heading_3: {
        rich_text: Array<RichTextItemRequest>;
        color?: ApiColor;
        is_toggleable?: boolean;
        children?: Array<
          | {
              embed: {
                url: string;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'embed';
              object?: 'block';
            }
          | {
              bookmark: {
                url: string;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'bookmark';
              object?: 'block';
            }
          | {
              image: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'image';
              object?: 'block';
            }
          | {
              video: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'video';
              object?: 'block';
            }
          | {
              pdf: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'pdf';
              object?: 'block';
            }
          | {
              file: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'file';
              object?: 'block';
            }
          | {
              audio: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'audio';
              object?: 'block';
            }
          | {
              code: {
                rich_text: Array<RichTextItemRequest>;
                language: LanguageRequest;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'code';
              object?: 'block';
            }
          | {
              equation: {
                expression: string;
              };
              type?: 'equation';
              object?: 'block';
            }
          | {
              divider: EmptyObject;
              type?: 'divider';
              object?: 'block';
            }
          | {
              breadcrumb: EmptyObject;
              type?: 'breadcrumb';
              object?: 'block';
            }
          | {
              table_of_contents: {
                color?: ApiColor;
              };
              type?: 'table_of_contents';
              object?: 'block';
            }
          | {
              link_to_page:
                | {
                    page_id: IdRequest;
                    type?: 'page_id';
                  }
                | {
                    database_id: IdRequest;
                    type?: 'database_id';
                  };
              type?: 'link_to_page';
              object?: 'block';
            }
          | {
              table_row: {
                cells: Array<Array<RichTextItemRequest>>;
              };
              type?: 'table_row';
              object?: 'block';
            }
          | {
              heading_1: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_1';
              object?: 'block';
            }
          | {
              heading_2: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_2';
              object?: 'block';
            }
          | {
              heading_3: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_3';
              object?: 'block';
            }
          | {
              paragraph: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'paragraph';
              object?: 'block';
            }
          | {
              bulleted_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'bulleted_list_item';
              object?: 'block';
            }
          | {
              numbered_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'numbered_list_item';
              object?: 'block';
            }
          | {
              quote: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'quote';
              object?: 'block';
            }
          | {
              to_do: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
                checked?: boolean;
              };
              type?: 'to_do';
              object?: 'block';
            }
          | {
              toggle: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'toggle';
              object?: 'block';
            }
          | {
              template: {
                rich_text: Array<RichTextItemRequest>;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'template';
              object?: 'block';
            }
          | {
              callout: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
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
              object?: 'block';
            }
          | {
              synced_block: {
                synced_from: {
                  block_id: IdRequest;
                  type?: 'block_id';
                } | null;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'synced_block';
              object?: 'block';
            }
        >;
      };
      type?: 'heading_3';
      object?: 'block';
    }
  | {
      paragraph: {
        rich_text: Array<RichTextItemRequest>;
        color?: ApiColor;
        children?: Array<
          | {
              embed: {
                url: string;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'embed';
              object?: 'block';
            }
          | {
              bookmark: {
                url: string;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'bookmark';
              object?: 'block';
            }
          | {
              image: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'image';
              object?: 'block';
            }
          | {
              video: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'video';
              object?: 'block';
            }
          | {
              pdf: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'pdf';
              object?: 'block';
            }
          | {
              file: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'file';
              object?: 'block';
            }
          | {
              audio: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'audio';
              object?: 'block';
            }
          | {
              code: {
                rich_text: Array<RichTextItemRequest>;
                language: LanguageRequest;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'code';
              object?: 'block';
            }
          | {
              equation: {
                expression: string;
              };
              type?: 'equation';
              object?: 'block';
            }
          | {
              divider: EmptyObject;
              type?: 'divider';
              object?: 'block';
            }
          | {
              breadcrumb: EmptyObject;
              type?: 'breadcrumb';
              object?: 'block';
            }
          | {
              table_of_contents: {
                color?: ApiColor;
              };
              type?: 'table_of_contents';
              object?: 'block';
            }
          | {
              link_to_page:
                | {
                    page_id: IdRequest;
                    type?: 'page_id';
                  }
                | {
                    database_id: IdRequest;
                    type?: 'database_id';
                  };
              type?: 'link_to_page';
              object?: 'block';
            }
          | {
              table_row: {
                cells: Array<Array<RichTextItemRequest>>;
              };
              type?: 'table_row';
              object?: 'block';
            }
          | {
              heading_1: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_1';
              object?: 'block';
            }
          | {
              heading_2: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_2';
              object?: 'block';
            }
          | {
              heading_3: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_3';
              object?: 'block';
            }
          | {
              paragraph: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'paragraph';
              object?: 'block';
            }
          | {
              bulleted_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'bulleted_list_item';
              object?: 'block';
            }
          | {
              numbered_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'numbered_list_item';
              object?: 'block';
            }
          | {
              quote: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'quote';
              object?: 'block';
            }
          | {
              to_do: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
                checked?: boolean;
              };
              type?: 'to_do';
              object?: 'block';
            }
          | {
              toggle: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'toggle';
              object?: 'block';
            }
          | {
              template: {
                rich_text: Array<RichTextItemRequest>;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'template';
              object?: 'block';
            }
          | {
              callout: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
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
              object?: 'block';
            }
          | {
              synced_block: {
                synced_from: {
                  block_id: IdRequest;
                  type?: 'block_id';
                } | null;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'synced_block';
              object?: 'block';
            }
        >;
      };
      type?: 'paragraph';
      object?: 'block';
    }
  | {
      bulleted_list_item: {
        rich_text: Array<RichTextItemRequest>;
        color?: ApiColor;
        children?: Array<
          | {
              embed: {
                url: string;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'embed';
              object?: 'block';
            }
          | {
              bookmark: {
                url: string;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'bookmark';
              object?: 'block';
            }
          | {
              image: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'image';
              object?: 'block';
            }
          | {
              video: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'video';
              object?: 'block';
            }
          | {
              pdf: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'pdf';
              object?: 'block';
            }
          | {
              file: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'file';
              object?: 'block';
            }
          | {
              audio: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'audio';
              object?: 'block';
            }
          | {
              code: {
                rich_text: Array<RichTextItemRequest>;
                language: LanguageRequest;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'code';
              object?: 'block';
            }
          | {
              equation: {
                expression: string;
              };
              type?: 'equation';
              object?: 'block';
            }
          | {
              divider: EmptyObject;
              type?: 'divider';
              object?: 'block';
            }
          | {
              breadcrumb: EmptyObject;
              type?: 'breadcrumb';
              object?: 'block';
            }
          | {
              table_of_contents: {
                color?: ApiColor;
              };
              type?: 'table_of_contents';
              object?: 'block';
            }
          | {
              link_to_page:
                | {
                    page_id: IdRequest;
                    type?: 'page_id';
                  }
                | {
                    database_id: IdRequest;
                    type?: 'database_id';
                  };
              type?: 'link_to_page';
              object?: 'block';
            }
          | {
              table_row: {
                cells: Array<Array<RichTextItemRequest>>;
              };
              type?: 'table_row';
              object?: 'block';
            }
          | {
              heading_1: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_1';
              object?: 'block';
            }
          | {
              heading_2: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_2';
              object?: 'block';
            }
          | {
              heading_3: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_3';
              object?: 'block';
            }
          | {
              paragraph: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'paragraph';
              object?: 'block';
            }
          | {
              bulleted_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'bulleted_list_item';
              object?: 'block';
            }
          | {
              numbered_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'numbered_list_item';
              object?: 'block';
            }
          | {
              quote: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'quote';
              object?: 'block';
            }
          | {
              to_do: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
                checked?: boolean;
              };
              type?: 'to_do';
              object?: 'block';
            }
          | {
              toggle: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'toggle';
              object?: 'block';
            }
          | {
              template: {
                rich_text: Array<RichTextItemRequest>;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'template';
              object?: 'block';
            }
          | {
              callout: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
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
              object?: 'block';
            }
          | {
              synced_block: {
                synced_from: {
                  block_id: IdRequest;
                  type?: 'block_id';
                } | null;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'synced_block';
              object?: 'block';
            }
        >;
      };
      type?: 'bulleted_list_item';
      object?: 'block';
    }
  | {
      numbered_list_item: {
        rich_text: Array<RichTextItemRequest>;
        color?: ApiColor;
        children?: Array<
          | {
              embed: {
                url: string;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'embed';
              object?: 'block';
            }
          | {
              bookmark: {
                url: string;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'bookmark';
              object?: 'block';
            }
          | {
              image: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'image';
              object?: 'block';
            }
          | {
              video: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'video';
              object?: 'block';
            }
          | {
              pdf: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'pdf';
              object?: 'block';
            }
          | {
              file: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'file';
              object?: 'block';
            }
          | {
              audio: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'audio';
              object?: 'block';
            }
          | {
              code: {
                rich_text: Array<RichTextItemRequest>;
                language: LanguageRequest;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'code';
              object?: 'block';
            }
          | {
              equation: {
                expression: string;
              };
              type?: 'equation';
              object?: 'block';
            }
          | {
              divider: EmptyObject;
              type?: 'divider';
              object?: 'block';
            }
          | {
              breadcrumb: EmptyObject;
              type?: 'breadcrumb';
              object?: 'block';
            }
          | {
              table_of_contents: {
                color?: ApiColor;
              };
              type?: 'table_of_contents';
              object?: 'block';
            }
          | {
              link_to_page:
                | {
                    page_id: IdRequest;
                    type?: 'page_id';
                  }
                | {
                    database_id: IdRequest;
                    type?: 'database_id';
                  };
              type?: 'link_to_page';
              object?: 'block';
            }
          | {
              table_row: {
                cells: Array<Array<RichTextItemRequest>>;
              };
              type?: 'table_row';
              object?: 'block';
            }
          | {
              heading_1: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_1';
              object?: 'block';
            }
          | {
              heading_2: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_2';
              object?: 'block';
            }
          | {
              heading_3: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_3';
              object?: 'block';
            }
          | {
              paragraph: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'paragraph';
              object?: 'block';
            }
          | {
              bulleted_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'bulleted_list_item';
              object?: 'block';
            }
          | {
              numbered_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'numbered_list_item';
              object?: 'block';
            }
          | {
              quote: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'quote';
              object?: 'block';
            }
          | {
              to_do: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
                checked?: boolean;
              };
              type?: 'to_do';
              object?: 'block';
            }
          | {
              toggle: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'toggle';
              object?: 'block';
            }
          | {
              template: {
                rich_text: Array<RichTextItemRequest>;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'template';
              object?: 'block';
            }
          | {
              callout: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
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
              object?: 'block';
            }
          | {
              synced_block: {
                synced_from: {
                  block_id: IdRequest;
                  type?: 'block_id';
                } | null;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'synced_block';
              object?: 'block';
            }
        >;
      };
      type?: 'numbered_list_item';
      object?: 'block';
    }
  | {
      quote: {
        rich_text: Array<RichTextItemRequest>;
        color?: ApiColor;
        children?: Array<
          | {
              embed: {
                url: string;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'embed';
              object?: 'block';
            }
          | {
              bookmark: {
                url: string;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'bookmark';
              object?: 'block';
            }
          | {
              image: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'image';
              object?: 'block';
            }
          | {
              video: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'video';
              object?: 'block';
            }
          | {
              pdf: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'pdf';
              object?: 'block';
            }
          | {
              file: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'file';
              object?: 'block';
            }
          | {
              audio: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'audio';
              object?: 'block';
            }
          | {
              code: {
                rich_text: Array<RichTextItemRequest>;
                language: LanguageRequest;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'code';
              object?: 'block';
            }
          | {
              equation: {
                expression: string;
              };
              type?: 'equation';
              object?: 'block';
            }
          | {
              divider: EmptyObject;
              type?: 'divider';
              object?: 'block';
            }
          | {
              breadcrumb: EmptyObject;
              type?: 'breadcrumb';
              object?: 'block';
            }
          | {
              table_of_contents: {
                color?: ApiColor;
              };
              type?: 'table_of_contents';
              object?: 'block';
            }
          | {
              link_to_page:
                | {
                    page_id: IdRequest;
                    type?: 'page_id';
                  }
                | {
                    database_id: IdRequest;
                    type?: 'database_id';
                  };
              type?: 'link_to_page';
              object?: 'block';
            }
          | {
              table_row: {
                cells: Array<Array<RichTextItemRequest>>;
              };
              type?: 'table_row';
              object?: 'block';
            }
          | {
              heading_1: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_1';
              object?: 'block';
            }
          | {
              heading_2: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_2';
              object?: 'block';
            }
          | {
              heading_3: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_3';
              object?: 'block';
            }
          | {
              paragraph: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'paragraph';
              object?: 'block';
            }
          | {
              bulleted_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'bulleted_list_item';
              object?: 'block';
            }
          | {
              numbered_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'numbered_list_item';
              object?: 'block';
            }
          | {
              quote: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'quote';
              object?: 'block';
            }
          | {
              to_do: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
                checked?: boolean;
              };
              type?: 'to_do';
              object?: 'block';
            }
          | {
              toggle: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'toggle';
              object?: 'block';
            }
          | {
              template: {
                rich_text: Array<RichTextItemRequest>;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'template';
              object?: 'block';
            }
          | {
              callout: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
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
              object?: 'block';
            }
          | {
              synced_block: {
                synced_from: {
                  block_id: IdRequest;
                  type?: 'block_id';
                } | null;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'synced_block';
              object?: 'block';
            }
        >;
      };
      type?: 'quote';
      object?: 'block';
    }
  | {
      to_do: {
        rich_text: Array<RichTextItemRequest>;
        color?: ApiColor;
        children?: Array<
          | {
              embed: {
                url: string;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'embed';
              object?: 'block';
            }
          | {
              bookmark: {
                url: string;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'bookmark';
              object?: 'block';
            }
          | {
              image: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'image';
              object?: 'block';
            }
          | {
              video: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'video';
              object?: 'block';
            }
          | {
              pdf: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'pdf';
              object?: 'block';
            }
          | {
              file: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'file';
              object?: 'block';
            }
          | {
              audio: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'audio';
              object?: 'block';
            }
          | {
              code: {
                rich_text: Array<RichTextItemRequest>;
                language: LanguageRequest;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'code';
              object?: 'block';
            }
          | {
              equation: {
                expression: string;
              };
              type?: 'equation';
              object?: 'block';
            }
          | {
              divider: EmptyObject;
              type?: 'divider';
              object?: 'block';
            }
          | {
              breadcrumb: EmptyObject;
              type?: 'breadcrumb';
              object?: 'block';
            }
          | {
              table_of_contents: {
                color?: ApiColor;
              };
              type?: 'table_of_contents';
              object?: 'block';
            }
          | {
              link_to_page:
                | {
                    page_id: IdRequest;
                    type?: 'page_id';
                  }
                | {
                    database_id: IdRequest;
                    type?: 'database_id';
                  };
              type?: 'link_to_page';
              object?: 'block';
            }
          | {
              table_row: {
                cells: Array<Array<RichTextItemRequest>>;
              };
              type?: 'table_row';
              object?: 'block';
            }
          | {
              heading_1: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_1';
              object?: 'block';
            }
          | {
              heading_2: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_2';
              object?: 'block';
            }
          | {
              heading_3: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_3';
              object?: 'block';
            }
          | {
              paragraph: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'paragraph';
              object?: 'block';
            }
          | {
              bulleted_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'bulleted_list_item';
              object?: 'block';
            }
          | {
              numbered_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'numbered_list_item';
              object?: 'block';
            }
          | {
              quote: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'quote';
              object?: 'block';
            }
          | {
              to_do: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
                checked?: boolean;
              };
              type?: 'to_do';
              object?: 'block';
            }
          | {
              toggle: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'toggle';
              object?: 'block';
            }
          | {
              template: {
                rich_text: Array<RichTextItemRequest>;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'template';
              object?: 'block';
            }
          | {
              callout: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
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
              object?: 'block';
            }
          | {
              synced_block: {
                synced_from: {
                  block_id: IdRequest;
                  type?: 'block_id';
                } | null;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'synced_block';
              object?: 'block';
            }
        >;
        checked?: boolean;
      };
      type?: 'to_do';
      object?: 'block';
    }
  | {
      toggle: {
        rich_text: Array<RichTextItemRequest>;
        color?: ApiColor;
        children?: Array<
          | {
              embed: {
                url: string;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'embed';
              object?: 'block';
            }
          | {
              bookmark: {
                url: string;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'bookmark';
              object?: 'block';
            }
          | {
              image: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'image';
              object?: 'block';
            }
          | {
              video: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'video';
              object?: 'block';
            }
          | {
              pdf: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'pdf';
              object?: 'block';
            }
          | {
              file: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'file';
              object?: 'block';
            }
          | {
              audio: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'audio';
              object?: 'block';
            }
          | {
              code: {
                rich_text: Array<RichTextItemRequest>;
                language: LanguageRequest;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'code';
              object?: 'block';
            }
          | {
              equation: {
                expression: string;
              };
              type?: 'equation';
              object?: 'block';
            }
          | {
              divider: EmptyObject;
              type?: 'divider';
              object?: 'block';
            }
          | {
              breadcrumb: EmptyObject;
              type?: 'breadcrumb';
              object?: 'block';
            }
          | {
              table_of_contents: {
                color?: ApiColor;
              };
              type?: 'table_of_contents';
              object?: 'block';
            }
          | {
              link_to_page:
                | {
                    page_id: IdRequest;
                    type?: 'page_id';
                  }
                | {
                    database_id: IdRequest;
                    type?: 'database_id';
                  };
              type?: 'link_to_page';
              object?: 'block';
            }
          | {
              table_row: {
                cells: Array<Array<RichTextItemRequest>>;
              };
              type?: 'table_row';
              object?: 'block';
            }
          | {
              heading_1: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_1';
              object?: 'block';
            }
          | {
              heading_2: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_2';
              object?: 'block';
            }
          | {
              heading_3: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_3';
              object?: 'block';
            }
          | {
              paragraph: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'paragraph';
              object?: 'block';
            }
          | {
              bulleted_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'bulleted_list_item';
              object?: 'block';
            }
          | {
              numbered_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'numbered_list_item';
              object?: 'block';
            }
          | {
              quote: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'quote';
              object?: 'block';
            }
          | {
              to_do: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
                checked?: boolean;
              };
              type?: 'to_do';
              object?: 'block';
            }
          | {
              toggle: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'toggle';
              object?: 'block';
            }
          | {
              template: {
                rich_text: Array<RichTextItemRequest>;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'template';
              object?: 'block';
            }
          | {
              callout: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
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
              object?: 'block';
            }
          | {
              synced_block: {
                synced_from: {
                  block_id: IdRequest;
                  type?: 'block_id';
                } | null;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'synced_block';
              object?: 'block';
            }
        >;
      };
      type?: 'toggle';
      object?: 'block';
    }
  | {
      template: {
        rich_text: Array<RichTextItemRequest>;
        children?: Array<
          | {
              embed: {
                url: string;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'embed';
              object?: 'block';
            }
          | {
              bookmark: {
                url: string;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'bookmark';
              object?: 'block';
            }
          | {
              image: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'image';
              object?: 'block';
            }
          | {
              video: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'video';
              object?: 'block';
            }
          | {
              pdf: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'pdf';
              object?: 'block';
            }
          | {
              file: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'file';
              object?: 'block';
            }
          | {
              audio: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'audio';
              object?: 'block';
            }
          | {
              code: {
                rich_text: Array<RichTextItemRequest>;
                language: LanguageRequest;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'code';
              object?: 'block';
            }
          | {
              equation: {
                expression: string;
              };
              type?: 'equation';
              object?: 'block';
            }
          | {
              divider: EmptyObject;
              type?: 'divider';
              object?: 'block';
            }
          | {
              breadcrumb: EmptyObject;
              type?: 'breadcrumb';
              object?: 'block';
            }
          | {
              table_of_contents: {
                color?: ApiColor;
              };
              type?: 'table_of_contents';
              object?: 'block';
            }
          | {
              link_to_page:
                | {
                    page_id: IdRequest;
                    type?: 'page_id';
                  }
                | {
                    database_id: IdRequest;
                    type?: 'database_id';
                  };
              type?: 'link_to_page';
              object?: 'block';
            }
          | {
              table_row: {
                cells: Array<Array<RichTextItemRequest>>;
              };
              type?: 'table_row';
              object?: 'block';
            }
          | {
              heading_1: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_1';
              object?: 'block';
            }
          | {
              heading_2: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_2';
              object?: 'block';
            }
          | {
              heading_3: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_3';
              object?: 'block';
            }
          | {
              paragraph: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'paragraph';
              object?: 'block';
            }
          | {
              bulleted_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'bulleted_list_item';
              object?: 'block';
            }
          | {
              numbered_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'numbered_list_item';
              object?: 'block';
            }
          | {
              quote: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'quote';
              object?: 'block';
            }
          | {
              to_do: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
                checked?: boolean;
              };
              type?: 'to_do';
              object?: 'block';
            }
          | {
              toggle: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'toggle';
              object?: 'block';
            }
          | {
              template: {
                rich_text: Array<RichTextItemRequest>;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'template';
              object?: 'block';
            }
          | {
              callout: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
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
              object?: 'block';
            }
          | {
              synced_block: {
                synced_from: {
                  block_id: IdRequest;
                  type?: 'block_id';
                } | null;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'synced_block';
              object?: 'block';
            }
        >;
      };
      type?: 'template';
      object?: 'block';
    }
  | {
      callout: {
        rich_text: Array<RichTextItemRequest>;
        color?: ApiColor;
        children?: Array<
          | {
              embed: {
                url: string;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'embed';
              object?: 'block';
            }
          | {
              bookmark: {
                url: string;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'bookmark';
              object?: 'block';
            }
          | {
              image: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'image';
              object?: 'block';
            }
          | {
              video: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'video';
              object?: 'block';
            }
          | {
              pdf: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'pdf';
              object?: 'block';
            }
          | {
              file: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'file';
              object?: 'block';
            }
          | {
              audio: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'audio';
              object?: 'block';
            }
          | {
              code: {
                rich_text: Array<RichTextItemRequest>;
                language: LanguageRequest;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'code';
              object?: 'block';
            }
          | {
              equation: {
                expression: string;
              };
              type?: 'equation';
              object?: 'block';
            }
          | {
              divider: EmptyObject;
              type?: 'divider';
              object?: 'block';
            }
          | {
              breadcrumb: EmptyObject;
              type?: 'breadcrumb';
              object?: 'block';
            }
          | {
              table_of_contents: {
                color?: ApiColor;
              };
              type?: 'table_of_contents';
              object?: 'block';
            }
          | {
              link_to_page:
                | {
                    page_id: IdRequest;
                    type?: 'page_id';
                  }
                | {
                    database_id: IdRequest;
                    type?: 'database_id';
                  };
              type?: 'link_to_page';
              object?: 'block';
            }
          | {
              table_row: {
                cells: Array<Array<RichTextItemRequest>>;
              };
              type?: 'table_row';
              object?: 'block';
            }
          | {
              heading_1: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_1';
              object?: 'block';
            }
          | {
              heading_2: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_2';
              object?: 'block';
            }
          | {
              heading_3: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_3';
              object?: 'block';
            }
          | {
              paragraph: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'paragraph';
              object?: 'block';
            }
          | {
              bulleted_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'bulleted_list_item';
              object?: 'block';
            }
          | {
              numbered_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'numbered_list_item';
              object?: 'block';
            }
          | {
              quote: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'quote';
              object?: 'block';
            }
          | {
              to_do: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
                checked?: boolean;
              };
              type?: 'to_do';
              object?: 'block';
            }
          | {
              toggle: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'toggle';
              object?: 'block';
            }
          | {
              template: {
                rich_text: Array<RichTextItemRequest>;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'template';
              object?: 'block';
            }
          | {
              callout: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
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
              object?: 'block';
            }
          | {
              synced_block: {
                synced_from: {
                  block_id: IdRequest;
                  type?: 'block_id';
                } | null;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'synced_block';
              object?: 'block';
            }
        >;
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
      object?: 'block';
    }
  | {
      synced_block: {
        synced_from: {
          block_id: IdRequest;
          type?: 'block_id';
        } | null;
        children?: Array<
          | {
              embed: {
                url: string;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'embed';
              object?: 'block';
            }
          | {
              bookmark: {
                url: string;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'bookmark';
              object?: 'block';
            }
          | {
              image: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'image';
              object?: 'block';
            }
          | {
              video: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'video';
              object?: 'block';
            }
          | {
              pdf: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'pdf';
              object?: 'block';
            }
          | {
              file: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'file';
              object?: 'block';
            }
          | {
              audio: {
                external: {
                  url: TextRequest;
                };
                type?: 'external';
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'audio';
              object?: 'block';
            }
          | {
              code: {
                rich_text: Array<RichTextItemRequest>;
                language: LanguageRequest;
                caption?: Array<RichTextItemRequest>;
              };
              type?: 'code';
              object?: 'block';
            }
          | {
              equation: {
                expression: string;
              };
              type?: 'equation';
              object?: 'block';
            }
          | {
              divider: EmptyObject;
              type?: 'divider';
              object?: 'block';
            }
          | {
              breadcrumb: EmptyObject;
              type?: 'breadcrumb';
              object?: 'block';
            }
          | {
              table_of_contents: {
                color?: ApiColor;
              };
              type?: 'table_of_contents';
              object?: 'block';
            }
          | {
              link_to_page:
                | {
                    page_id: IdRequest;
                    type?: 'page_id';
                  }
                | {
                    database_id: IdRequest;
                    type?: 'database_id';
                  };
              type?: 'link_to_page';
              object?: 'block';
            }
          | {
              table_row: {
                cells: Array<Array<RichTextItemRequest>>;
              };
              type?: 'table_row';
              object?: 'block';
            }
          | {
              heading_1: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_1';
              object?: 'block';
            }
          | {
              heading_2: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_2';
              object?: 'block';
            }
          | {
              heading_3: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                is_toggleable?: boolean;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'heading_3';
              object?: 'block';
            }
          | {
              paragraph: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'paragraph';
              object?: 'block';
            }
          | {
              bulleted_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'bulleted_list_item';
              object?: 'block';
            }
          | {
              numbered_list_item: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'numbered_list_item';
              object?: 'block';
            }
          | {
              quote: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'quote';
              object?: 'block';
            }
          | {
              to_do: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
                checked?: boolean;
              };
              type?: 'to_do';
              object?: 'block';
            }
          | {
              toggle: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'toggle';
              object?: 'block';
            }
          | {
              template: {
                rich_text: Array<RichTextItemRequest>;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'template';
              object?: 'block';
            }
          | {
              callout: {
                rich_text: Array<RichTextItemRequest>;
                color?: ApiColor;
                children?: Array<BlockObjectRequestWithoutChildren>;
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
              object?: 'block';
            }
          | {
              synced_block: {
                synced_from: {
                  block_id: IdRequest;
                  type?: 'block_id';
                } | null;
                children?: Array<BlockObjectRequestWithoutChildren>;
              };
              type?: 'synced_block';
              object?: 'block';
            }
        >;
      };
      type?: 'synced_block';
      object?: 'block';
    };

type Children = BlockObjectRequest[]
