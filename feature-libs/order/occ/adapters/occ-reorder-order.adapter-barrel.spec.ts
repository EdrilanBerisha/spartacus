/*
 * SPDX-FileCopyrightText: 2026 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Barrel file (index.ts) export regression test for issue #20659:
 * "OccReorderOrderAdapter is not included in barrel file"
 *
 * This test verifies that OccReorderOrderAdapter is exported from the
 * feature-libs/order/occ/adapters/index.ts barrel file so that consumers
 * can import it via the public API (@spartacus/order/occ).
 *
 * @see https://github.com/SAP/spartacus/issues/20659
 */
import { OccReorderOrderAdapter } from './index';

describe('OccReorderOrderAdapter barrel export (issue #20659)', () => {
  it('should export OccReorderOrderAdapter from the adapters index barrel file', () => {
    // If this import resolves correctly, the barrel file exports OccReorderOrderAdapter
    expect(OccReorderOrderAdapter).toBeDefined();
  });

  it('should export OccReorderOrderAdapter as a class (not undefined or null)', () => {
    expect(typeof OccReorderOrderAdapter).toBe('function');
  });

  it('should export OccReorderOrderAdapter with a reorder method on the prototype', () => {
    expect(typeof OccReorderOrderAdapter.prototype.reorder).toBe('function');
  });
});
