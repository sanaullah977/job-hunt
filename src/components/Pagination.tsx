"use client";

import React, { useMemo } from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  scrollToTop?: boolean;
  targetElementId?: string;
  showFirstLast?: boolean;
  className?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  scrollToTop = true,
  targetElementId,
  showFirstLast = false,
  className = "",
}: PaginationProps) {
  //  pagination range with ellipses
  const paginationRange = useMemo(() => {
    // Total numbers to show: siblingCount + firstPage + lastPage + currentPage + 2*dots
    const totalPageNumbers = siblingCount + 5;

    // Case 1: If total pages is less than page numbers we want to show, return all pages [1..totalPages]
    if (totalPages <= totalPageNumbers) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    // Case 2: No left dots to show, but right dots should be shown
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
      return [...leftRange, "...", totalPages];
    }

    // Case 3: No right dots to show, but left dots should be shown
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = Array.from(
        { length: rightItemCount },
        (_, i) => totalPages - rightItemCount + i + 1
      );
      return [firstPageIndex, "...", ...rightRange];
    }

    // Case 4: Both left and right dots to show
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => leftSiblingIndex + i
      );
      return [firstPageIndex, "...", ...middleRange, "...", lastPageIndex];
    }

    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }, [totalPages, currentPage, siblingCount]);

  if (totalPages <= 1) return null;

  const handlePageClick = (page: number) => {
    if (page === currentPage || page < 1 || page > totalPages) return;
    onPageChange(page);

    if (targetElementId) {
      const el = document.getElementById(targetElementId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      className={`flex items-center justify-center gap-1.5 sm:gap-2 ${className}`}
    >
      {/* Optional First Page Button */}
      {showFirstLast && (
        <button
          onClick={() => handlePageClick(1)}
          disabled={currentPage === 1}
          className="w-9 h-9 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-xs"
          title="First Page"
        >
          <ChevronsLeft className="w-4 h-4" />
        </button>
      )}

      {/* Previous Button */}
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-9 h-9 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-xs"
        aria-label="Previous page"
        title="Previous Page"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Page Numbers and Ellipses */}
      {paginationRange.map((pageNumber, idx) => {
        if (pageNumber === "...") {
          return (
            <span
              key={`dots-${idx}`}
              className="px-1.5 text-slate-400 text-xs font-semibold select-none"
            >
              ...
            </span>
          );
        }

        const isCurrent = pageNumber === currentPage;
        return (
          <button
            key={`page-${pageNumber}`}
            onClick={() => handlePageClick(pageNumber as number)}
            className={`w-9 h-9 rounded-xl text-xs font-semibold transition-all ${
              isCurrent
                ? "bg-blue-600 text-white shadow-sm shadow-blue-500/25 cursor-default"
                : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300"
            }`}
            aria-current={isCurrent ? "page" : undefined}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-9 h-9 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-xs"
        aria-label="Next page"
        title="Next Page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Optional Last Page Button */}
      {showFirstLast && (
        <button
          onClick={() => handlePageClick(totalPages)}
          disabled={currentPage === totalPages}
          className="w-9 h-9 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-xs"
          title="Last Page"
        >
          <ChevronsRight className="w-4 h-4" />
        </button>
      )}
    </nav>
  );
}
